import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "../../containers/Landing/index";
import setAuthToken from "../../utils/setAuthToken";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Sticky } from "semantic-ui-react";
import Routes from "../routing/Routes";
import store from "../../index";
import { Provider } from "react-redux";
import { loadUser } from "../../actions/auth";
const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Sticky>
            {" "}
            <Navbar />
          </Sticky>

          <Switch>
            <Route exact path='/' component={Landing} />
            <Route component={Routes} />
          </Switch>

          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
};

// function mapStateToProps(state) {
//   return { authenticated: state.auth.authenticated };
// }
// export default connect(mapStateToProps, null)(App);
export default App;
