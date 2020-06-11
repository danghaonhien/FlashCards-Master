import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Card } from "semantic-ui-react";

const ProfileItem = ({
  profile: {
    user: { _id, name },
    school,
    location,
  },
}) => {
  return (
    <Fragment>
      <Card
        color='green'
        href={`/profile/${_id}`}
        header={name}
        meta={school}
        description={location && <span>{location}</span>}
        score='score:15'
      />
    </Fragment>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
