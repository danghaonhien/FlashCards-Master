import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import "./styles.css";
import App from "./containers/App";
// import { loadUser } from "./actions/auth";
import reducers from "./reducers";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
// 1st param is our reducers
// 2nd param is any preloaded state we want
// 3rd param is any middlwares we want applied to redux

const initialState = {};
const store = createStore(
  reducers,
  // {
  //   auth: { authenticated: localStorage.getItem("token") },
  // },
  initialState,
  composeEnhancers(applyMiddleware(reduxThunk))
);
store.dispatch(loadUser());
export default store;
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
