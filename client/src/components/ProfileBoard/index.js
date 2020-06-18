import React from "react";
import PropTypes from "prop-types";
import { Card } from "semantic-ui-react";
const ProfileBoard = ({
  profile: {
    school,
    location,
    bio,
    user: { name },
  },
}) => {
  return (
    <Card
      fluid
      color='green'
      header={name}
      meta={school}
      description={location}
      extra={bio}
    />
  );
};

ProfileBoard.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileBoard;
