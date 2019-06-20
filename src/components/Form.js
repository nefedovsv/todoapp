import React from 'react'
export const Form = props => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          value={props.text}
          placeholder="Todo text"
          onChange={e => props.setText(e.currentTarget.value)}
        />
        <input type="submit" value="Добавить" />
      </form>
    </div>
  )
}
