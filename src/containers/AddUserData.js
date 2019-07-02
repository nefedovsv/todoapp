import React, { useState } from 'react'
import { connect } from 'react-redux'
import { handleLogIn } from '../action/authenticate'
import { Form } from '../components/Form'
const AddUserData = ({ handleLogIn }) => {
  const [text, setText] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    handleLogIn(text)
    setText('')
  }
  return <Form text={text} setText={setText} handleSubmit={handleSubmit} />
}
export default connect(
  null,
  { handleLogIn }
)(AddUserData)
