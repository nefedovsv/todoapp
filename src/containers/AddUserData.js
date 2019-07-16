import React, { useState } from 'react'
import { inject, observer } from 'mobx-react'
import { InputUserData } from '../components/InputUserData'
export const AddUserData = inject('authentication')(
  observer(({ authentication }) => {
    const [text, setText] = useState('')
    const handleSubmit = event => {
      event.preventDefault()
      authentication.logIn(text)
      setText('')
    }
    return (
      <InputUserData
        text={text}
        setText={setText}
        handleSubmit={handleSubmit}
      />
    )
  })
)
