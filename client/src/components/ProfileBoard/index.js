import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";
const ProfileBoard = ({
  profile: {
    school,
    location,
    bio,
    social,
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

    // <div className='profile-top bg-primary p-2'>
    //   <h1 className='large'>{name}</h1>
    //   <p className='lead'>{school}</p>
    //   <p>{location && <span>{location}</span>}</p>
    //   <div className='icons my-1'>
    //     {social && social.facebook && (
    //       <Link to='#' target='_blank' rel='noopener noreferrer'>
    //         <i className='fab fa-facebook fa-2x'></i>
    //       </Link>
    //     )}
    //     {social && social.linkedin && (
    //       <Link to='#' target='_blank' rel='noopener noreferrer'>
    //         <i className='fab fa-linkedin fa-2x'></i>
    //       </Link>
    //     )}
    //   </div>

    //   <h3>Bio</h3>
    //   <p>{bio}</p>
    // </div>
  );
};

ProfileBoard.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileBoard;
