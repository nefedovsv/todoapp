import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleLogOut } from '../action/authenticate'

const AuthButton = withRouter(({ history, isAuthenticated, handleLogOut }) => {
  return isAuthenticated ? (
    <p>
      Добро пожаловать!
      <button
        onClick={() => {
          handleLogOut()
          history.push('/login')
          localStorage.clear()
        }}
      >
        Выйти
      </button>
    </p>
  ) : (
    <p>Вы не авторизованны!</p>
  )
})
const mapStateToProps = store => {
  return {
    isAuthenticated: store.authentication.isAuthenticated,
  }
}
export default connect(
  mapStateToProps,
  { handleLogOut }
)(AuthButton)
