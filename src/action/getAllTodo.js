import * as todo from '../constants/constants'
export const getAllTodo = () => {
  return async dispatch => {
    try {
      const response = await fetch('http://localhost:3000/api/users/')
      const data = await response.json()

      dispatch({ type: todo.GET_ALL_TODO, payload: data })
    } catch (error) {
      dispatch({ type: todo.FAIL_TODO })
    }
  }
}
