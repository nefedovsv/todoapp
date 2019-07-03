import * as login from '../constants/constants'
import { api } from '../constants/api'
export const handleLogIn = data => {
  return async dispatch => {
    try {
      const { token } = await api.post('token/', data)
      localStorage.setItem('token', `${token}`)
      dispatch({
        type: login.LOGIN_ACTION,
        payload: true,
      })
    } catch (error) {
      dispatch({ type: login.FAIL_TODO })
    }
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
