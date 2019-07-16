import React from 'react'
import { Router, Route } from 'react-router'
import { createBrowserHistory } from 'history'
import { Switch } from 'react-router-dom'
import { NoMatchPage } from './components/NoMatchPage'
import { TodoPage } from './components/TodoPage'
import { Login } from './containers/Authorisation'
import { PrivateRoute } from './containers/PrivateRoute'
import { AuthButton } from './containers/Header/AuthButton'
import { Provider } from 'mobx-react'
import {
  VisibilityFilter,
  Authentication,
  TodoModification,
} from './store/mobxStore'
const todoModification = new TodoModification()
const visibilityFilter = new VisibilityFilter()
const authentication = new Authentication()
const history = createBrowserHistory()
export function App() {
  return (
    <Provider
      mobxStore={visibilityFilter}
      authentication={authentication}
      todoModification={todoModification}
    >
      <Router history={history}>
        <div>
          <AuthButton />
          <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute path="/profile" component={TodoPage} />
            <Route component={NoMatchPage} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}
