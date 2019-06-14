import { combineReducers } from 'redux'
import todos from './addTodoReducer'

export const rootReducer = combineReducers({
  todos,
})
