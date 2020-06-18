import React, { Fragment, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import DashBoard from "../../containers/DashBoard/Dashboard";
import Landing from "../../containers/Landing/index";
import CreateProfile from "../../containers/profile-forms/CreateProfile";
import EditProfile from "../../containers/profile-forms/EditProfile";
import Alert from "../../components/Alert";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Posts from "../../components/Posts";
import Post from "../../components/Post";
import Profile from "../../components/Profile/";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Quiz from "../Quiz";
import PostQuestions from "../PostQuestions";
import PrivateRoute from "../../containers/routing/PrivateRoute";
import Profiles from "../../containers/Profiles/index";
import { loadUser } from "../../actions/auth";
import store from "../../index";
import setAuthToken from "../../utils/setAuthToken";
import Flashcards from "../Flashcards";
import HandleFlashcard from "../Flashcards/HandleFlashcards";
import Option from "../Option";
import { Sticky } from "semantic-ui-react";
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  return (
    <Fragment>
      <Sticky>
        {" "}
        <Navbar />
      </Sticky>

      <Route exact path='/' component={Landing} />
      <section className='container'>
        <Alert />
        <Switch>
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/profiles' component={Profiles} />
          <Route exact path='/profile/:id' component={Profile} />
          <Route exact path='/quiz/' component={Quiz} />
          <Route exact path='/addflashcards' component={Flashcards} />
          <Route exact path='/flashcards' component={HandleFlashcard} />
          <Route exact path='/option' component={Option} />
          <PrivateRoute exact path='/dashboard/' component={DashBoard} />
          <PrivateRoute exact path='/postquiz/' component={PostQuestions} />
          <PrivateRoute
            exact
            path='/create-profile'
            component={CreateProfile}
          />
          <PrivateRoute exact path='/edit-profile' component={EditProfile} />
          <PrivateRoute exact path='/posts' component={Posts} />
          <PrivateRoute exact path='/posts/:id' component={Post} />
        </Switch>
      </section>
      <Footer />
    </Fragment>
  );
};

// function mapStateToProps(state) {
//   return { authenticated: state.auth.authenticated };
// }
// export default connect(mapStateToProps, null)(App);
export default App;
