import React from "react";
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";
import { Switch } from "react-router-dom";
import { NoMatchPage } from "./common/NoMatchPage";
import { PrivateRoute } from "./common/auth/PrivateRoute";
import { Authentication } from "./common/auth/Authentication";
import { TodoPage } from "./common/todo/TodoPage/TodoPage";
import AuthButton from "./common/auth/AuthButton/AuthButton";
const history = createBrowserHistory();
export function App() {
  return (
    <Router history={history}>
      <div>
        <AuthButton />
        <Switch>
          <Route exact path="/" component={Authentication} />
          <PrivateRoute path="/profile" component={TodoPage} />
          <Route component={NoMatchPage} />
        </Switch>
      </div>
    </Router>
  );
}
