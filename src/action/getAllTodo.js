import * as todo from '../constants/constants'
import { api } from '../constants/api'
export const getAllTodo = () => {
  return async dispatch => {
    try {
      const data = await api.get('users/')
      dispatch({ type: todo.GET_ALL_TODO, payload: data })
    } catch (error) {
      dispatch({ type: todo.FAIL_TODO })
    }
  }
}
