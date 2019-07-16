import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { inject, observer } from 'mobx-react'
import { AddUserData } from '../containers/AddUserData'
export const Login = inject('authentication')(
  observer(
    class Login extends Component {
      render() {
        const isAuthenticated = this.props.authentication.isAuthenticated
        let { from } = this.props.location.state || {
          from: { pathname: '/profile' },
        }
        if (isAuthenticated) return <Redirect to={from} />
        return <AddUserData />
      }
    }
  )
)
