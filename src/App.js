import React from 'react'
import { Auth0Provider } from './react-auth0-wrapper'
import config from './auth_config.json'
import NavBar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Profile from './components/Profile'
import { NoMatch } from './components/NoMatch'
import PrivateRoute from './components/PrivateRoute'
export function App() {
  return (
    <Auth0Provider domain={config.domain} client_id={config.clientId}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    </Auth0Provider>
  )
}
