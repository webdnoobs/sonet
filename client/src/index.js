import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import injectTapEventPlugin from "react-tap-event-plugin";
import App from "./components/App";
import reducers from "./reducers";

injectTapEventPlugin();

const store = createStore(reducers, {}, applyMiddleware(reduxPromise));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
