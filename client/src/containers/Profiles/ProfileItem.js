import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
const ProfileItem = ({
  profile: {
    user: { _id, name },
    school,
    location,
    bio,
  },
}) => {
  return (
    <Fragment>
      <Card color='green'>
        <Card.Content>
          <Card.Header>
            <Link to={`/profile/${_id}`}>{name}</Link>
          </Card.Header>
          <Card.Meta>
            <span className='date'>{school}</span>
          </Card.Meta>
          <Card.Description>
            {location && <span>{location}</span>}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>{bio}</Card.Content>
      </Card>
    </Fragment>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
