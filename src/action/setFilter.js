import * as todo from '../constants/constants'
export const setFilter = filter => ({
  type: todo.SET_FILTER,
  payload: { filter },
})
