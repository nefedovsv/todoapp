import React from 'react'
export const Todo = props => {
  return (
    <div>
      {props.arrayTodo.map(todo => (
        <div key={todo._id}>
          {todo && todo.completed ? 'СДЕЛАНО ' : ' '}
          <span onClick={props.handleClickText(todo)}>
            {todo.todoText}
          </span>{' '}
          <button onClick={props.handleClick(todo)}> Удалить </button>
        </div>
      ))}
    </div>
  )
}
