import * as todo from '../constants/constants'
import { api } from '../constants/api'
export const addTodo = text => {
  return async dispatch => {
    try {
      const data = await api.post('users/', text)
      dispatch({ type: todo.ADD_TODO, payload: data })
    } catch (error) {
      dispatch({ type: todo.FAIL_TODO })
    }
  }
}
export const deliteTodo = id => {
  return async dispatch => {
    try {
      api.delite('users/', id)
      dispatch({ type: todo.DELITE_TODO, payload: { id } })
    } catch (error) {
      dispatch({ type: todo.FAIL_TODO })
    }
  }
}
export const getAllTodo = () => {
  return async dispatch => {
    try {
      const data = await api.get('users/')
      dispatch({ type: todo.GET_ALL_TODO, payload: data })
    } catch (error) {
      dispatch({ type: todo.FAIL_TODO })
    }
  }
}
export const toggleTodo = (id, completed) => {
  return async dispatch => {
    try {
      api.put('users/', id, completed)
      dispatch({ type: todo.TOGGLE_TODO, payload: { id, completed } })
    } catch (error) {
      dispatch({ type: todo.FAIL_TODO })
    }
  }
}
export const setFilter = filter => ({
  type: todo.SET_FILTER,
  payload: { filter },
})
