import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
export const DashboardActions = () => {
  return (
    <Fragment>
      <Link to='/edit-profile'>
        <i className='fas fa-user-circle'></i> Edit Profile
      </Link>
    </Fragment>
  );
};
export default DashboardActions;
