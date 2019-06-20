import * as todo from '../constants/constants'
export const getAllTodo = () => {
  return async dispatch => {
    try {
      const response = await fetch(todo.API)
      const data = await response.json()
      dispatch({ type: todo.GET_ALL_TODO, payload: data })
    } catch (error) {
      dispatch({ type: todo.FAIL_TODO })
    }
  }
}
