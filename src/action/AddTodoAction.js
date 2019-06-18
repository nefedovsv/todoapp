import * as todo from '../constants/constants'
export const addTodo = text => {
  return async dispatch => {
    try {
      const response = await fetch('http://localhost:3000/api/users/', {
        method: 'post',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ todoText: text }),
      }) /*.catch(error => {
        console.log(error) // можно ввести дополнительный обработчик ошибок, подобным образом
      })*/
      const data = await response.json()
      dispatch({ type: todo.ADD_TODO, payload: [data] })
    } catch (error) {
      dispatch({ type: todo.FAIL_TODO })
    }
  }
}
