import * as todo from '../constants/constants'
export const toggleTodo = id => {
  return async dispatch => {
    try {
      await fetch('http://localhost:3000/api/users/', {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
          completed: true,
        }),
      })
      const response = await fetch('http://localhost:3000/api/users/')
      const data = await response.json()
      dispatch({ type: todo.TOGGLE_TODO, payload: data })
    } catch (error) {
      dispatch({ type: todo.FAIL_TODO })
    }
  }
}
