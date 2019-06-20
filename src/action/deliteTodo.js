import * as todo from '../constants/constants'
export const deliteTodo = id => {
  return async dispatch => {
    try {
      await fetch(todo.API + `${id}`, {
        method: 'DELETE',
      })
      const response = await fetch(todo.API)
      const data = await response.json()
      dispatch({ type: todo.DELITE_TODO, payload: data })
    } catch (error) {
      dispatch({ type: todo.FAIL_TODO })
    }
  }
}
