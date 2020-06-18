import React, { Fragment, useState } from "react";
import {
  Form,
  Segment,
  Button,
  Message,
  Header,
  Grid,
} from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../../actions/auth";
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";

const SignUp = ({ setAlert, signup, authenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      signup({ name, email, password });
    }
  };

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
            <i className='fas fa-user'></i> Create your account
          </Header>

          <Form size='large' onSubmit={(e) => onSubmit(e)}>
            <Segment stacked>
              <Form.Field>
                <input
                  placeholder='Name'
                  name='name'
                  value={name}
                  onChange={(e) => onChange(e)}
                />
              </Form.Field>
              <Form.Field>
                <input
                  placeholder='Email'
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
                  minLength={6}
                  required
                />
              </Form.Field>
              <Form.Field>
                <input
                  type='password'
                  placeholder='Confirm Password'
                  name='password2'
                  value={password2}
                  onChange={(e) => onChange(e)}
                  minLength={6}
                  required
                />
              </Form.Field>

              <Button
                content='Sign up'
                color='teal'
                fluid
                size='large'
                type='submit'
              />
            </Segment>
          </Form>
          <Message>
            Already have an account? <Link to='/signin'> Sign In</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

SignUp.propTypes = {
  setAlert: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
  authenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
});
export default connect(mapStateToProps, { setAlert, signup })(SignUp);
