import { combineReducers } from 'redux'
import { todoModification } from './todoModification'
import visibilityFilter from './visibilityFilter'
export const rootReducer = combineReducers({
  todos: todoModification,
  visibilityFilter,
})
