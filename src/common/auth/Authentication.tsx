import * as React from "react";
import { Redirect, RouteComponentProps } from "react-router";
import { inject, observer } from "mobx-react";
import { AddUserData } from "./AddUserData/AddUserData";
import { IAuthentication } from "../../models/IAuthenticationSchema";
interface IProps {
  authentication: IAuthentication;
  location: RouteComponentProps["location"];
}
@inject("authentication")
@observer
export class Authentication extends React.Component<IProps> {
  render() {
    const { isAuthenticated } = this.props.authentication;
    let { from } = this.props.location.state || {
      from: { pathname: "/profile" }
    };
    if (isAuthenticated) return <Redirect to={from} />;
    return <AddUserData />;
  }
}
