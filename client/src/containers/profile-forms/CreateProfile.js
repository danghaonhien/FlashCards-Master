import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Form, Segment, Button, Header } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { createProfile } from "../../actions/profile";
function CreateProfile({ createProfile, history }) {
  const [formData, setFormData] = useState({
    school: "",
    location: "",
    bio: "",
    facebook: "",
    linkedin: "",
  });
  const [displaySocialInputs, toggleSocialInputs] = useState(false);
  const { school, location, bio, facebook, linkedin } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };
  return (
    <Fragment>
      <Header as='h2' color='teal' textAlign='center'>
        <i className='fas fa-user'></i>Create Your Profile
      </Header>
      <p className='lead'>
        <i className='fas fa-code-branch'></i> Add any school that you have
        studied in the past
      </p>
      <Form size='large' onSubmit={(e) => onSubmit(e)}>
        <Segment stacked>
          <Form.Field>
            <input
              type='text'
              placeholder='School'
              name='school'
              value={school}
              onChange={(e) => onChange(e)}
              required
            />
          </Form.Field>
          <Form.Field>
            <input
              type='text'
              placeholder='Location'
              name='location'
              value={location}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>
              City & state suggested (eg. San Francisco, CA)
            </small>
          </Form.Field>
          <Form.Field>
            <textarea
              placeholder='A short bio of yourself'
              name='bio'
              value={bio}
              onChange={(e) => onChange(e)}
            ></textarea>
            <small className='form-text'>Tell us a little about yourself</small>
          </Form.Field>
          <Button
            type='button'
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            className='btn btn-light'
          >
            Add Social Network Links
          </Button>

          {displaySocialInputs && (
            <Fragment>
              <Form.Field>
                <i className='fab fa-facebook fa-2x'></i>
                <input
                  type='text'
                  placeholder='Facebook URL'
                  name='facebook'
                  value={facebook}
                  onChange={(e) => onChange(e)}
                />
              </Form.Field>
              <Form.Field>
                <i className='fab fa-linkedin fa-2x'></i>
                <input
                  type='text'
                  placeholder='Linkedin URL'
                  name='linkedin'
                  value={linkedin}
                  onChange={(e) => onChange(e)}
                />
              </Form.Field>
            </Fragment>
          )}
        </Segment>
        <Button color='teal' fluid size='large' type='submit'>
          Submit
        </Button>
      </Form>

      <Link className='btn btn-light my-1' to='/dashboard'>
        Go Back
      </Link>
    </Fragment>
  );
}

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
