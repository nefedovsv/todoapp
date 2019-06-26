import React from 'react'
import AddTodo from './containers/AddTodo'
import TodoList from './containers/TodoList'
import Filters from './components/Filters'
import { Auth0Provider } from './react-auth0-wrapper'
import config from './auth_config.json'
import NavBar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Profile from './components/Profile'
import PrivateRoute from './components/PrivateRoute'
export function App() {
  return (
    <Auth0Provider domain={config.domain} client_id={config.clientId}>
      <BrowserRouter>
        <NavBar />
        <AddTodo />
        <TodoList />
        <Filters />
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </Auth0Provider>
  )
}
