import * as filters from './constants'
import { ITodo } from '../models/ITodoSchema'
export const getArrayTodosByVisibilityFilter = (
  todo: ITodo[],
  filter: string
) => {
  switch (filter) {
    case filters.VISIBILITY_FILTERS.COMPLETED:
      return todo.filter(todo => todo.completed)
    case filters.VISIBILITY_FILTERS.INCOMPLETE:
      return todo.filter(todo => !todo.completed)
    case filters.VISIBILITY_FILTERS.ALL:
    default:
      return todo
  }
}
