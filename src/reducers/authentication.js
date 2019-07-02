import * as login from '../constants/constants'
const initialState = {
  isAuthenticated: false,
  userData: '',
}
export function authentication(state = initialState, action) {
  switch (action.type) {
    case login.LOGIN_ACTION:
      return {
        ...state,
        isAuthenticated: action.payload,
        userData: action.userData,
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
