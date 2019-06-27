import React from 'react'
export const Todo = ({
  arrayTodo,
  handleClickText,
  handleClick,
  getTokenSilently,
}) => {
  return (
    <div>
      {arrayTodo.map(todo => (
        <div key={todo._id}>
          {todo && todo.completed ? 'СДЕЛАНО ' : ' '}
          <span onClick={handleClickText(todo, getTokenSilently)}>
            {todo.todoText}
          </span>{' '}
          <button onClick={handleClick(todo, getTokenSilently)}>
            {' '}
            Удалить{' '}
          </button>
        </div>
      ))}
    </div>
  )
}
