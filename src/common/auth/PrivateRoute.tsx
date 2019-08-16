import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
export const PrivateRoute = inject('authentication')(
  observer(({ component: Component, authentication, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        authentication.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  ))
)
