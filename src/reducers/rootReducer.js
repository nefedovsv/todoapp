import { combineReducers } from 'redux'
import { getAllTodo } from './getAllTodoReducer'
import visibilityFilter from './visibilityFilter'
export const rootReducer = combineReducers({
  todos: getAllTodo,
  visibilityFilter,
})
