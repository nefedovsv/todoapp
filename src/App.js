import React from 'react'
import { Router, Route } from 'react-router'
import { createBrowserHistory } from 'history'
import { Switch } from 'react-router-dom'
import { NoMatch } from './components/NoMatch'
import Login from './containers/Authorisation'
import PrivateRoute from './containers/PrivateRoute'
import AuthButton from './containers/AuthButton'
import { TodoApp } from './components/TodoApp'
const history = createBrowserHistory()
export function App() {
  return (
    <Router history={history}>
      <div>
        <AuthButton />
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/profile" component={TodoApp} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  )
}
