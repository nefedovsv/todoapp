import { combineReducers } from 'redux'
import { getAllTodo } from './getAllTodoReducer'
export const rootReducer = combineReducers({
  todos: getAllTodo,
})
