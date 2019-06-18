import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../action/AddTodoAction'
const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('')
  const handleSubmit = event => {
    event.preventDefault()
    addTodo(text)
    setText('')
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
export default connect(
  null,
  { addTodo }
)(AddTodo)
