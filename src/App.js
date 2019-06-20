import React from 'react'
import AddTodo from './containers/AddTodo'
import TodoList from './containers/TodoList'
import Filters from './components/Filters'
function App() {
  return (
    <div>
      <AddTodo />
      <TodoList />
      <Filters />
    </div>
  )
}
export default App
