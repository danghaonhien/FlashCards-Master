import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signin } from "../../actions/auth/index";
import {
  Form,
  Segment,
  Button,
  Header,
  Message,
  Grid,
} from "semantic-ui-react";
import PropTypes from "prop-types";
function SignIn({ signin, authenticated }) {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const { email, password } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    signin({ email, password });
  };

  // Redirect if logged in
  if (authenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <Grid
        textAlign='center'
        style={{ height: "100vh" }}
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 700 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <i className='fas fa-user'></i> Log-in to your account
          </Header>
          <Form size='large' onSubmit={(e) => onSubmit(e)}>
            <Segment stacked>
              <Form.Field>
                <input
                  type='email'
                  placeholder='Email Address'
                  name='email'
                  value={email}
                  onChange={(e) => onChange(e)}
                  required
                />
              </Form.Field>
              <Form.Field>
                <input
                  type='password'
                  placeholder='Password'
                  name='password'
                  value={password}
                  onChange={(e) => onChange(e)}
                />
              </Form.Field>
              <Button
                content='Sign In'
                color='teal'
                fluid
                size='large'
                type='submit'
              />
            </Segment>
          </Form>
          <Message>
            Don't have an account? <Link to='/signup'>Sign Up</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </Fragment>
  );
}
SignIn.propTypes = {
  signin: PropTypes.func.isRequired,
  authenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps, { signin })(SignIn);
