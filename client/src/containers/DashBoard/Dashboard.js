import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, getProfileById } from "../../actions/profile";
import DashboardActions from "./DashboardActions";
import Spinner from "../../components/Spinner/index";
import ProfileBoard from "../../components/ProfileBoard";
import { Link } from "react-router-dom";
import { Button, Divider } from "semantic-ui-react";
const Dashboard = ({
  getProfileById,
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
  match,
}) => {
  useEffect(
    () => {
      getCurrentProfile();
      getProfileById(match.params.id);
    },
    [getCurrentProfile],
    [getProfileById]
  );

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1>Dashboard </h1>
      <p className='lead'>
        <i className='fas fa-user' /> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <Fragment>
          <Fragment>
            <Button>
              <Link to='/option'>FlashCard</Link>
            </Button>
            <Button>
              <Link to='/quiz'>Take Quiz</Link>
            </Button>

            <DashboardActions />
          </Fragment>
          <Divider section />
          <Fragment>
            <ProfileBoard profile={profile} />
          </Fragment>
        </Fragment>
      ) : (
        <Fragment>
          {" "}
          <p>You have not setup a profile, please add some info</p>
          <Link to='/create-profile' className='btn btn-primary my-1'>
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  getProfileById: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});
export default connect(mapStateToProps, { getProfileById, getCurrentProfile })(
  Dashboard
);
