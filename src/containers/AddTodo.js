import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../action/addTodoAction'
import { Form } from '../components/Form'
const AddTodo = ({ addTodo, user }) => {
  const [text, setText] = useState('')
  const userData = {
    todoText: text,
    userId: user.email,
  }
  const handleSubmit = event => {
    event.preventDefault()
    addTodo(userData)
    setText('')
  }
  return <Form text={text} setText={setText} handleSubmit={handleSubmit} />
}
export default connect(
  null,
  { addTodo }
)(AddTodo)
