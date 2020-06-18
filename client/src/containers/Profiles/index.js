import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../../components/Spinner";
import ProfileItem from "./ProfileItem";
import { getProfiles } from "../../actions/profile/index";
import { Link } from "react-router-dom";
import { Divider, Button } from "semantic-ui-react";
const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    // <Fragment>
    //   {loading ? (
    //     <Spinner />
    //   ) : (
    <Fragment>
      <h1>Classroom</h1>
      <p>Connect with classmates around the globe</p>
      <Button>
        <Link to='/posts'>Playground</Link>
      </Button>
      <Divider />
      <div className='profiles'>
        {profiles.length > 0 ? (
          profiles.map((profile) => (
            <ProfileItem key={profile._id} profile={profile} />
          ))
        ) : (
          <h4> No profiles found </h4>
        )}
      </div>
    </Fragment>
    //   )}
    // </Fragment>
  );
};
Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
