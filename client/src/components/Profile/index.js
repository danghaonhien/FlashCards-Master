import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../Spinner";
import { getProfileById } from "../../actions/profile";
import ProfileBoard from "../ProfileBoard";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
function Profile({
  getProfileById,
  profile: { profile, loading },
  auth,
  match,
}) {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById]);

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to='/profiles'>
            <Icon name='arrow alternate circle left outline' size='big' />
          </Link>

          <div className='profileBox'>
            {auth.authenticated &&
              auth.loading === false &&
              auth.user._id === profile.user._id && (
                <Link to='/edit-profile'>
                  {" "}
                  <Icon name='user circle' /> Edit Profile
                </Link>
              )}

            <ProfileBoard profile={profile} />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
