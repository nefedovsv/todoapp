import * as todo from '../constants/constants'
import { api } from '../constants/api'
export const deliteTodo = id => {
  return async dispatch => {
    try {
      api.delite('users/', id)
      dispatch({ type: todo.DELITE_TODO, payload: { id } })
    } catch (error) {
      dispatch({ type: todo.FAIL_TODO })
    }
  }
}
