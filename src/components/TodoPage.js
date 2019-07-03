import React from 'react'
import AddTodo from '../containers/AddTodo'
import TodoList from '../containers/TodoList'
import Filters from '../containers/Filters'
export const TodoPage = () => {
  return (
    <div>
      <AddTodo />
      <TodoList />
      <Filters />
    </div>
  )
}
