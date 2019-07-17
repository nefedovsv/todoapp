import * as filters from '../constants/constants'
import { api } from '../constants/api'
import { observable, action, decorate, runInAction } from 'mobx'
let initialStateAuthentication = false
const token = localStorage.getItem('token')
token
  ? (initialStateAuthentication = true)
  : (initialStateAuthentication = false)
class Authentication {
  isAuthenticated = initialStateAuthentication
  async logIn(data) {
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
  logOut() {
    this.isAuthenticated = false
  }
}
decorate(Authentication, {
  isAuthenticated: observable,
  logIn: action,
  logOut: action,
})

class TodoModification {
  todo = []
  filter = filters.VISIBILITY_FILTERS.ALL
  setFilter(filter) {
    this.filter = filter
  }
  async getAllTodo() {
    try {
      const data = await api.get('users/')
      runInAction(() => {
        this.todo = data
      })
    } catch (error) {
      runInAction(() => {
        this.todo = []
      })
    }
  }
  async addTodo(text) {
    try {
      const data = await api.post('users/', text)
      this.todo = [...this.todo, data]
    } catch (error) {
      this.todo = []
    }
  }
  async deliteTodo(id) {
    try {
      api.delite('users/', id)
      const resultDelite = this.todo.filter(item => item._id !== id)
      this.todo = resultDelite
    } catch (error) {
      this.todo = []
    }
  }
  async toggleTodo(id, completed) {
    try {
      api.put('users/', id, completed)
      const resultToggle = this.todo.map(item =>
        item._id === id ? { ...item, completed: !completed } : item
      )
      this.todo = resultToggle
    } catch (error) {
      this.todo = []
    }
  }
}
decorate(TodoModification, {
  todo: observable,
  filter: observable,
  setFilter: action,
  getAllTodo: action,
  addTodo: action,
  deliteTodo: action,
  toggleTodo: action,
})

export const store = {
  todoModification: new TodoModification(),
  authentication: new Authentication(),
}
