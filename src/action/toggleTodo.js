import * as todo from '../constants/constants'
import { api } from '../constants/api'
export const toggleTodo = (id, completed, getTokenSilently) => {
  return async dispatch => {
    try {
      const token = await getTokenSilently()
      api.put('users/', id, token, completed)
      dispatch({ type: todo.TOGGLE_TODO, payload: { id, completed } })
    } catch (error) {
      dispatch({ type: todo.FAIL_TODO })
    }
  }
}
