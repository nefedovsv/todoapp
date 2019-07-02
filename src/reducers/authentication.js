import * as login from '../constants/constants'
const initialState = {
  isAuthenticated: false,
  token: '',
}
export function authentication(state = initialState, action) {
  switch (action.type) {
    case login.LOGIN_ACTION:
      return {
        ...state,
        isAuthenticated: action.payload,
        token: action.token,
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
