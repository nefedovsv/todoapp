import * as todo from '../constants/constants'
import { api } from '../constants/api'
export const toggleTodo = (id, completed) => {
  return async dispatch => {
    try {
      api.put('users/', id)
      dispatch({ type: todo.TOGGLE_TODO, payload: { id, completed } })
    } catch (error) {
      dispatch({ type: todo.FAIL_TODO })
    }
  }
}
