import React, { Fragment } from "react";

const Profile = ({ profile }) => {
  //   const profiles = profile.map((pro) => (
  //     <tr key={pro._id}>
  //       <td>{pro.school}</td>
  //       <td>{pro.location}</td>
  //     </tr>
  //   ));

  for (var key in profile) {
    if (profile.prototype.hasOwnProperty(key)) {
      profile[key] = profile;
    }
  }

  return (
    <Fragment>
      <h2 className='my-2'>My Profile</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>School</th>
            <th className='hide-sm'>Location</th>
            <th className='hide-sm'>Record</th>
          </tr>
        </thead>
        <tbody>{profile}</tbody>
      </table>
    </Fragment>
  );
};

export default Profile;
