import React from "react";
import { render } from "react-dom";
import { Provider } from "mobx-react";
import { App } from "./App";
import { store } from "./store/mobxStore";
import "./Antd.css";

render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
