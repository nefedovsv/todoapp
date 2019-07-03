import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { handleLogIn } from '../action/authenticate'
import AddUserData from '../containers/AddUserData'

class Login extends Component {
  render() {
    let { from } = this.props.location.state || {
      from: { pathname: '/profile' },
    }
    if (this.props.isAuthenticated) return <Redirect to={from} />
    return <AddUserData />
  }
}
const mapStateToProps = store => {
  return {
    isAuthenticated: store.authentication.isAuthenticated,
  }
}
export default connect(
  mapStateToProps,
  { handleLogIn }
)(Login)
