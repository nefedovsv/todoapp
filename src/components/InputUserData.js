import React from 'react'
export const InputUserData = ({ handleSubmit, setText, text }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          placeholder="Nickname"
          onChange={e => setText(e.currentTarget.value)}
        />
        <input type="submit" value="Авторизоваться" />
      </form>
    </div>
  )
}
