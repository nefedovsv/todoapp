import * as filters from './constants'
interface ITodo {
  _id: string;
  completed: boolean;
  userName: string;
  data: string;
}
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
