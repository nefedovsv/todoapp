import * as todo from '../constants/constants'
export const addTodo = text => {
  return async dispatch => {
    try {
      const response = await fetch(todo.API, {
        method: 'post',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ todoText: text }),
      })
      const data = await response.json()
      dispatch({ type: todo.ADD_TODO, payload: data })
    } catch (error) {
      dispatch({ type: todo.FAIL_TODO })
    }
  }
}
