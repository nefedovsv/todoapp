import * as todo from '../constants/constants'
export const toggleTodo = (id, completed) => {
  return async dispatch => {
    try {
      await fetch(todo.API, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
          completed: !completed,
        }),
      })
      dispatch({ type: todo.TOGGLE_TODO, payload: { id, completed } })
    } catch (error) {
      dispatch({ type: todo.FAIL_TODO })
    }
  }
}
