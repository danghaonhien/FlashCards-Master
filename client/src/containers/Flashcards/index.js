import React, { Component } from "react";
import { reduxForm, Field, formValues } from "redux-form";
import { Form, Segment, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./index.css";
import { setAlert } from "../../actions/alert";
import { ADD_FLASHCARD, ADD_FLASHCARD_ERROR } from "../../actions/types";
class Flashcard extends Component {
  onSubmit = async (formValues, dispatch) => {
    try {
      await axios.post("/api/flashcards", formValues, {
        headers: { authorization: localStorage.getItem("token") },
      });
      dispatch({ type: ADD_FLASHCARD });
      dispatch(setAlert("Card Created", "success"));
      this.props.getUserFlashcards();
    } catch (e) {
      dispatch({ type: ADD_FLASHCARD_ERROR, payload: e });
    }
  };
  renderInput = ({ input, meta }) => {
    return (
      <Form.Input
        {...input}
        error={meta.touched && meta.error}
        fluid
        autoComplete='off'
        placeholder='Input ...'
      />
    );
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <>
        <Form size='large' onSubmit={handleSubmit(this.onSubmit)}>
          <Segment stacked>
            <Field name='front' component={this.renderInput} />
            <Field name='back' component={this.renderInput} />
            <Button type='submit' fluid color='teal' content='Create' />
          </Segment>
        </Form>
        <Button as={Link} to='/dashboard' color='teal'>
          Go back
        </Button>
        <Button as={Link} to='/flashcards' color='teal'>
          View
        </Button>
      </>
    );
  }
}
export default reduxForm({ form: "addFlashcard" })(Flashcard);
