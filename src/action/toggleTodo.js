import * as todo from '../constants/constants'
export const toggleTodo = id => {
  return async dispatch => {
    try {
      await fetch(todo.API, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
          completed: true,
        }),
      })
      const response = await fetch(todo.API)
      const data = await response.json()
      dispatch({ type: todo.TOGGLE_TODO, payload: data })
    } catch (error) {
      dispatch({ type: todo.FAIL_TODO })
    }
  }
}
