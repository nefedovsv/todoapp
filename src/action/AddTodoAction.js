import * as todo from '../constants/constants'
import { api } from '../constants/api'
export const addTodo = text => {
  return async dispatch => {
    try {
      const data = await api.post('users/', text)
      dispatch({ type: todo.ADD_TODO, payload: data })
    } catch (error) {
      dispatch({ type: todo.FAIL_TODO })
    }
  }
}
