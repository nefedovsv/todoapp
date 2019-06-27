import * as todo from '../constants/constants'
import { api } from '../constants/api'
export const addTodo = (userData, getTokenSilently) => {
  return async dispatch => {
    try {
      const token = await getTokenSilently()
      const data = await api.post('users/', userData, token)
      dispatch({ type: todo.ADD_TODO, payload: data })
    } catch (error) {
      dispatch({ type: todo.FAIL_TODO })
    }
  }
}
