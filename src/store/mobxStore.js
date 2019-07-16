import * as filters from '../constants/constants'
import { api } from '../constants/api'
import { observable, action, decorate, computed, runInAction } from 'mobx'

const initialStateVisibilityFilter = filters.VISIBILITY_FILTERS.ALL

export class VisibilityFilter {
  filter = initialStateVisibilityFilter

  get actualfilter() {
    return this.filter
  }
  setFilter(filter) {
    this.filter = filter
  }
}

decorate(VisibilityFilter, {
  filter: observable,
  setFilter: action,
  actualfilter: computed,
})

let initialStateAuthentication = false
const token = localStorage.getItem('token')
token
  ? (initialStateAuthentication = true)
  : (initialStateAuthentication = false)

export class Authentication {
  isAuthenticated = initialStateAuthentication

  get actualAuthention() {
    return this.isAuthenticated
  }
  async logeIn(data) {
    try {
      const { token } = await api.post('token/', data)
      localStorage.setItem('token', `${token}`)
      runInAction(() => {
        this.isAuthenticated = true
      })
    } catch (error) {
      runInAction(() => {
        this.isAuthenticated = false
      })
    }
  }

  // mobx.configure({ enforceActions: "observed" })

  logeOut() {
    this.isAuthenticated = false
  }
}

decorate(Authentication, {
  isAuthenticated: observable,
  logeIn: action,
  logeOut: action,
  actualAuthention: computed,
})

const initialStateTodoModification = []
export class TodoModification {
  todo = initialStateTodoModification
  get actualAuthention() {
    return this.todo
  }
  async getAllTodo() {
    try {
      const data = await api.get('users/')
      console.log(data)
      runInAction(() => {
        this.todo = data
      })
    } catch (error) {
      runInAction(() => {
        this.todo = initialStateTodoModification
      })
    }
  }
}
decorate(TodoModification, {
  todo: observable.ref,
  actualAuthention: computed,
  getAllTodo: action,
  addTodo: action,
  deliteTodo: action,
  toggleTodo: action,
})
/*
export const todoModification = (state = [], action) => {
  switch (action.type) {
    case todo.GET_ALL_TODO:
      return [...action.payload]
    case todo.ADD_TODO:
      return [...state, action.payload]
    case todo.DELITE_TODO:
      const resultDelite = state.filter(item => item._id !== action.payload.id)
      return [...resultDelite]
    case todo.TOGGLE_TODO:
      const resultToggle = state.map(item =>
        item._id === action.payload.id
          ? { ...item, completed: !action.payload.completed }
          : item
      )
      return [...resultToggle]
    case todo.FAIL_TODO:
      return [...state, { fail: 'У вас ошибка!' }]
    default:
      return state
  }
}
*/
