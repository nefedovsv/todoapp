import * as React from 'react'
import { Redirect } from 'react-router'
import { inject, observer } from 'mobx-react'
import { AddUserData } from './AddUserData'
interface IProps {
  authentication:any
  location?:any
}
@inject('authentication')
@observer
export class Login extends React.Component<IProps>  {
      render() {
        const {isAuthenticated} = this.props.authentication
        let { from } = this.props.location.state || {
          from: { pathname: '/profile' },
        }
        if (isAuthenticated) return <Redirect to={from} />
        return <AddUserData />
      }
    }
  
