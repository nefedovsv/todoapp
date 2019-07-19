import * as filters from './constants'
export const getArrayTodosByVisibilityFilter = (todo, filter) => {
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
