import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Typography, Button } from 'antd'
import { handleLogOut } from '../../action/authenticate'
//import c from 'classnames'
import styles from './AuthButton.module.css'
const { Text } = Typography
const AuthButton = withRouter(({ history, isAuthenticated, handleLogOut }) => {
  return isAuthenticated ? (
    <Text strong className={styles.root}>
      <span className={styles.margin}>Добро пожаловать!</span>
      <Button
        type="primary"
        onClick={() => {
          handleLogOut()
          history.push('/login')
          localStorage.clear()
        }}
      >
        Выйти
      </Button>
    </Text>
  ) : (
    <Text strong className={styles.root}>
      Вы не авторизованны!
    </Text>
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
