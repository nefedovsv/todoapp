import React from 'react'
import { Router, Route } from 'react-router'
import { createBrowserHistory } from 'history'
import { Switch } from 'react-router-dom'
import { NoMatchPage } from './components/NoMatchPage'
import { TodoPage } from './components/TodoPage'
import Login from './containers/Authorisation'
import PrivateRoute from './containers/PrivateRoute'
import AuthButton from './containers/Header/AuthButton'
const history = createBrowserHistory()
export function App() {
  return (
    <Router history={history}>
      <div>
        <AuthButton />
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/profile" component={TodoPage} />
          <Route component={NoMatchPage} />
        </Switch>
      </div>
    </Router>
  )
}
