import { combineReducers } from 'redux'
import { getAllTodo } from './getAllTodoReducer'
import { authentication } from './authentication'
import visibilityFilter from './visibilityFilter'
export const rootReducer = combineReducers({
  todos: getAllTodo,
  visibilityFilter,
  authentication,
})
