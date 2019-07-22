import * as filters from '../constants/constants'
import { api } from '../constants/api'
import { observable, action, runInAction } from 'mobx'

export interface IAuthentication {
  isAuthenticated: boolean;
  logIn(data: string): Promise<void>
  logOut() : void
}

interface Todo {
  _id: string;
  completed: boolean;
  userName: string;
  data: string;
}

let initialStateAuthentication: boolean = false
const token = localStorage.getItem('token')
token
  ? (initialStateAuthentication = true)
  : (initialStateAuthentication = false)
class Authentication implements IAuthentication {
  @observable  isAuthenticated = initialStateAuthentication
  @action.bound
  async logIn(data: string): Promise<void> {
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
  @action.bound
  logOut():void {
    this.isAuthenticated = false
  }
}

export interface ITodoModification {
  todo?: Todo[]
  filter?: string
  setFilter(filter: string): void
  getAllTodo(): Promise<void>
  addTodo(text: string): Promise<void>
  deliteTodo(id: string): Promise<void>
  toggleTodo(id: string, completed: boolean): Promise<void>
}


class TodoModification implements ITodoModification{
  @observable todo: Todo[] = []
  @observable filter: string = filters.VISIBILITY_FILTERS.ALL
  @action.bound
  setFilter(filter: string): void {
    this.filter = filter
  }
  @action.bound
  async getAllTodo(): Promise<void> {
    try {
      const data: Todo[] = await api.get('users/')
      runInAction(() => {
        this.todo = data
      })
    } catch (error) {
      runInAction(() => {
        this.todo = []
      })
    }
  }
  @action.bound
  async addTodo(text: string): Promise<void> {
    try {
      const data: Todo[] = await api.post('users/', text) 
      console.log(data)
      this.todo = this.todo.concat(data)
    } catch (error) {
      this.todo = []
    }
  }
  @action.bound
  async deliteTodo(id: string): Promise<void> {
    try {
      api.delite('users/', id)
      const resultDelite: Todo[] = this.todo.filter(item => item._id !== id)
      this.todo = resultDelite
    } catch (error) {
      this.todo = []
    }
  }
  @action.bound
  async toggleTodo(id: string, completed: boolean): Promise<void> {
    try {
      api.put('users/', id, completed)
      const resultToggle: Todo[] = this.todo.map(item =>
        item._id === id ? { ...item, completed: !completed } : item
      )
      this.todo = resultToggle
    } catch (error) {
      this.todo = []
    }
  }
}

export const store = {
  todoModification: new TodoModification(),
  authentication: new Authentication(),
}
