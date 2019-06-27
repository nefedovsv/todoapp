import * as todo from '../constants/constants'
import { api } from '../constants/api'
export const deliteTodo = (id, getTokenSilently) => {
  return async dispatch => {
    try {
      const token = await getTokenSilently()
      api.delite('users/', id, token)
      dispatch({ type: todo.DELITE_TODO, payload: { id } })
    } catch (error) {
      dispatch({ type: todo.FAIL_TODO })
    }
  }
}
