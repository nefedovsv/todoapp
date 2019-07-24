import { api } from '../constants/api'
import { observable, action, runInAction } from 'mobx'
import {IAuthentication} from '../models/IAuthenticationSchema'

let initialStateAuthentication: boolean = false
const token = localStorage.getItem('token')
token
  ? (initialStateAuthentication = true)
  : (initialStateAuthentication = false)
export class Authentication implements IAuthentication {
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

