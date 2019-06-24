import * as todo from '../constants/constants'
export const deliteTodo = id => {
  return async dispatch => {
    try {
      await fetch(todo.API + `${id}`, {
        method: 'DELETE',
      })
      dispatch({ type: todo.DELITE_TODO, payload: { id } })
    } catch (error) {
      dispatch({ type: todo.FAIL_TODO })
    }
  }
}
