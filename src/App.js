import React from 'react'
import { Auth0Provider } from './react-auth0-wrapper'
import config from './auth_config.json'
import NavBar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Profile from './components/Profile'
import { NoMatch } from './components/NoMatch'
import PrivateRoute from './components/PrivateRoute'
import ExternalApi from './components/ExternalApi'
const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  )
}
export function App() {
  return (
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      audience={config.audience}
      onRedirectCallback={onRedirectCallback}
    >
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/external-api" component={ExternalApi} />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    </Auth0Provider>
  )
}
