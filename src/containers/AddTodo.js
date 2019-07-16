import React, { useState } from 'react'
import { inject, observer } from 'mobx-react'
import { InputTodo } from '../components/InputTodo'
export const AddTodo = inject('todoModification')(
  observer(({ todoModification }) => {
    const [text, setText] = useState('')
    const handleSubmit = event => {
      event.preventDefault()
      todoModification.addTodo(text)
      setText('')
    }
    return (
      <InputTodo text={text} setText={setText} handleSubmit={handleSubmit} />
    )
  })
)
