import * as todo from '../constants/constants'
export const getAllTodo = (state = [], action) => {
  switch (action.type) {
    case todo.GET_ALL_TODO:
      return [...state, ...action.payload]
    case todo.ADD_TODO:
      return [...state, action.payload]
    case todo.DELITE_TODO:
      const resultDelite = state.filter(item => item._id !== action.payload.id)
      return [...resultDelite]
    case todo.TOGGLE_TODO:
      const resultToggle = state.map(item =>
        item._id === action.payload.id
          ? { ...item, completed: !action.payload.completed }
          : item
      )
      return [...resultToggle]
    case todo.FAIL_TODO:
      return [...state, { fail: 'У вас ошибка!' }]
    default:
      return state
  }
}
