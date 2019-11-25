import * as React from "react";
import { Redirect } from "react-router";
import { inject, observer } from "mobx-react";
import { AddUserData } from "./AddUserData/AddUserData";
import { LocationState } from "history";

const defaultLocationState: LocationState = {
  pathname: "/profile"
};

export const Authentication = inject("authentication")(
  observer(({ authentication }) => {
    const { isAuthenticated } = authentication;

    return isAuthenticated ? (
      <Redirect to={defaultLocationState} />
    ) : (
      <AddUserData />
    );
  })
);
