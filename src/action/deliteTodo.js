import * as todo from '../constants/constants'
export const deliteTodo = id => {
  return async dispatch => {
    try {
      await fetch(`http://localhost:3000/api/users/${id}`, {
        method: 'DELETE',
      })
      const response = await fetch('http://localhost:3000/api/users/')
      const data = await response.json()
      dispatch({ type: todo.DELITE_TODO, payload: data })
    } catch (error) {
      dispatch({ type: todo.FAIL_TODO })
    }
  }
}
