import React, { useState } from 'react'
import { connect } from 'react-redux'
import { handleLogIn } from '../action/authenticate'
import { InputUserData } from '../components/InputUserData'
const AddUserData = ({ handleLogIn }) => {
  const [text, setText] = useState('')
  const handleSubmit = event => {
    event.preventDefault()
    handleLogIn(text)
    setText('')
  }
  return (
    <InputUserData text={text} setText={setText} handleSubmit={handleSubmit} />
  )
}
export default connect(
  null,
  { handleLogIn }
)(AddUserData)
