import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { handleLogIn } from '../action/authenticate'
import AddUserData from '../containers/AddUserData'

class Login extends Component {
  handleloginAction = () => {
    console.log(this.props)
    // this.props.getLog(username, password)
  }
  render() {
    let { from } = this.props.location.state || { from: { pathname: '/' } }
    if (this.props.isAuthenticated) return <Redirect to={from} />
    return <AddUserData />
  }
}
const mapStateToProps = store => {
  //console.log(store.authentication.isAuthenticated)
  return {
    isAuthenticated: store.authentication.isAuthenticated,
  }
}
export default connect(
  mapStateToProps,
  { handleLogIn }
)(Login)
