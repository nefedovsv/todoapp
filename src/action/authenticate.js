import * as login from '../constants/constants'

export function handleLogIn(text) {
  return function(dispatch) {
    dispatch({
      type: login.LOGIN_ACTION,
      payload: true,
      userData: text,
    })
  }
}

export function handleLogOut() {
  return function(dispatch) {
    dispatch({
      type: login.LOGOUT_ACTION,
      payload: false,
    })
  }
}
