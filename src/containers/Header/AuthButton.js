import React from 'react'
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { Typography, Button } from 'antd'
import styles from './AuthButton.module.css'
const { Text } = Typography
export const AuthButton = inject('authentication')(
  observer(
    withRouter(({ history, authentication }) => {
      return authentication.isAuthenticated ? (
        <Text strong className={styles.root}>
          <span className={styles.margin}>Добро пожаловать!</span>
          <Button
            type="primary"
            onClick={() => {
              authentication.logeOut()
              history.push('/')
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
  )
)
