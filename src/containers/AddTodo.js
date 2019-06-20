import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../action/addTodoAction'
import { Form } from '../components/Form'
const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('')
  const handleSubmit = event => {
    event.preventDefault()
    addTodo(text)
    setText('')
  }
  return <Form text={text} setText={setText} handleSubmit={handleSubmit} />
}
export default connect(
  null,
  { addTodo }
)(AddTodo)
