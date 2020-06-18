import React from "react";

import { Route, Switch } from "react-router-dom";
import DashBoard from "../DashBoard/Dashboard";
import CreateProfile from "../profile-forms/CreateProfile";
import EditProfile from "../profile-forms/EditProfile";
import Alert from "../../components/Alert";

import Posts from "../../components/Posts";
import Post from "../../components/Post";
import Profile from "../../components/Profile";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Quiz from "../Quiz";
import PostQuestions from "../PostQuestions";
import PrivateRoute from "./PrivateRoute";
import Profiles from "../Profiles";
import Flashcards from "../Flashcards";
import HandleFlashcard from "../Flashcards/HandleFlashcards";
import Option from "../Option";

const Routes = (props) => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
        <PrivateRoute exact path='/dashboard/' component={DashBoard} />
        <Route exact path='/profiles' component={Profiles} />
        <Route exact path='/profile/:id' component={Profile} />
        <Route exact path='/quiz/' component={Quiz} />
        <Route exact path='/addflashcards' component={Flashcards} />
        <Route exact path='/flashcards' component={HandleFlashcard} />
        <Route exact path='/option' component={Option} />
        <PrivateRoute exact path='/postquiz/' component={PostQuestions} />
        <PrivateRoute exact path='/create-profile' component={CreateProfile} />
        <PrivateRoute exact path='/edit-profile' component={EditProfile} />
        <PrivateRoute exact path='/posts' component={Posts} />
        <PrivateRoute exact path='/posts/:id' component={Post} />
      </Switch>
    </section>
  );
};

// function mapStateToProps(state) {
//   return { authenticated: state.auth.authenticated };
// }
// export default connect(mapStateToProps, null)(App);
export default Routes;
