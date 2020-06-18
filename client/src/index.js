import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import App from "./containers/App";
// import { loadUser } from "./actions/auth";

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const INITIAL_STATE = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

export default store;
ReactDOM.render(
  <App />,

  document.getElementById("root")
);
