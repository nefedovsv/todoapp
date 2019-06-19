import * as todo from '../constants/constants'
export const getAllTodo = (state = [], action) => {
  switch (action.type) {
    case todo.GET_ALL_TODO:
      return [...state, ...action.payload]
    case todo.ADD_TODO:
      return [...state, action.payload]
    case todo.DELITE_TODO:
      return [...action.payload]
    case todo.TOGGLE_TODO:
      return [...action.payload]
    case todo.FAIL_TODO:
      return [...state, { fail: 'У вас ошибка!' }]
    default:
      return state
  }
}
