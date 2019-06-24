import React from 'react'
export const Todo = ({ arrayTodo, handleClickText, handleClick }) => {
  return (
    <div>
      {arrayTodo.map(todo => (
        <div key={todo._id}>
          {todo && todo.completed ? 'СДЕЛАНО ' : ' '}
          <span onClick={handleClickText(todo)}>{todo.todoText}</span>{' '}
          <button onClick={handleClick(todo)}> Удалить </button>
        </div>
      ))}
    </div>
  )
}
