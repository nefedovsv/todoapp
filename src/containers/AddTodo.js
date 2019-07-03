import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../action/todo'
import { InputTodo } from '../components/InputTodo'
const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('')
  const handleSubmit = event => {
    event.preventDefault()
    addTodo(text)
    setText('')
  }
  return <InputTodo text={text} setText={setText} handleSubmit={handleSubmit} />
}
export default connect(
  null,
  { addTodo }
)(AddTodo)
