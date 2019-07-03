import * as login from '../constants/constants'
let initialState = {}
const token = localStorage.getItem('token')
token
  ? (initialState = {
      isAuthenticated: true,
    })
  : (initialState = {
      isAuthenticated: false,
    })
export function authentication(state = initialState, action) {
  switch (action.type) {
    case login.LOGIN_ACTION:
      return {
        ...state,
        isAuthenticated: action.payload,
      }
    case login.LOGOUT_ACTION:
      return {
        ...state,
        isAuthenticated: action.payload,
      }
    default:
      return state
  }
}
