import { combineReducers } from 'redux'
import { todoModification } from './todoModification'
import { authentication } from './authentication'
import visibilityFilter from './visibilityFilter'
export const rootReducer = combineReducers({
  todos: todoModification,
  visibilityFilter,
  authentication,
})
