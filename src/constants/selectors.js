import * as filters from './constants'
export const getArrayTodosByVisibilityFilter = (todos, visibilityFilter) => {
  switch (visibilityFilter) {
    case filters.VISIBILITY_FILTERS.COMPLETED:
      return todos.filter(todo => todo.completed)
    case filters.VISIBILITY_FILTERS.INCOMPLETE:
      return todos.filter(todo => !todo.completed)
    case filters.VISIBILITY_FILTERS.ALL:
    default:
      return todos
  }
}
