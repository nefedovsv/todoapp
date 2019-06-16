import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../action/AddTodoAction'
const AddTodo = ({ dispatch }) => {
  const [text, setText] = useState('')
  const handleSubmit = event => {
    event.preventDefault()
    dispatch(addTodo(text))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          placeholder="Todo text"
          onChange={e => setText(e.currentTarget.value)}
        />
        <input type="submit" value="Добавить" />
      </form>
    </div>
  )
}
export default connect()(AddTodo)
