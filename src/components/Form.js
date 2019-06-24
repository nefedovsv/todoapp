import React from 'react'
export const Form = ({ handleSubmit, setText, text }) => {
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
