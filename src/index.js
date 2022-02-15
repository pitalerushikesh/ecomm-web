import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "./user/css/Homepage.css";
import Router from "./Router";
import { Provider } from "react-redux";
import { Store } from "./components/redux/Store";

ReactDOM.render(
  <Provider store={Store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
