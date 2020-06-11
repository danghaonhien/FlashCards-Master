import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signout } from "../../actions/auth";
import PropTypes from "prop-types";
const Navbar = ({ auth: { authenticated, loading }, signout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to='/profiles'>Classroom</Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user' />
          <span className='hide-sm'> Dashboard </span>
        </Link>
      </li>
      <li>
        <Link to='/signin' onClick={signout}>
          <i className='fas fa-sign-out-alt' />
          <span className='hide-sm'> Sign Out </span>
        </Link>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul>
      <li>
        <Link to='/profiles'>Classroom</Link>
      </li>
      <li>
        {" "}
        <Link to='/signup'>Sign Up</Link>
      </li>
      <li>
        <Link to='/signin'>Sign In</Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>FlashCard-Master</Link>
      </h1>
      {!loading && (
        <Fragment>{authenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};
Navbar.propTypes = {
  signout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { signout })(Navbar);
