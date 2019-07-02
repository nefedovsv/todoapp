import React from 'react'
import AddTodo from '../containers/AddTodo'
import TodoList from '../containers/TodoList'
import Filters from './Filters'
export const TodoApp = () => {
  return (
    <div>
      <AddTodo />
      <TodoList />
      <Filters />
    </div>
  )
}
