import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Menu, Grid, Header } from "semantic-ui-react";
import PropTypes from "prop-types";
function Landing({ authenticated }) {
  // console.log(authenticated);
  // if (authenticated) {
  //   return <Redirect to='/dashboard' />;
  // }
  return (
    <Fragment>
      <Grid
        textAlign='center'
        style={{ height: "100vh" }}
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 700 }}>
          <Header as='h2' color='teal' textAlign='center'>
            Welcome to FlashCard-Master
          </Header>
          <h3>Learning English made simple</h3>
          <Menu widths={5}>
            <Menu.Item as={Link} to='/signup' content='Get Started' />
          </Menu>
        </Grid.Column>
      </Grid>
    </Fragment>
  );
}

Landing.propTypes = {
  authenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
});
export default connect(mapStateToProps)(Landing);
