import React from "react";
import { Route, Redirect } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { LocationState } from "history";

const defaultLocationState: LocationState = { pathname: "/" };

export const PrivateRoute = inject("authentication")(
  observer(({ authentication, component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        authentication.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={defaultLocationState} />
        )
      }
    />
  ))
);
