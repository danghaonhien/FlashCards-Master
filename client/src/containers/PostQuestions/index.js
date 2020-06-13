import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { Header, Form, Segment, Button } from "semantic-ui-react";
import { ADD_QUESTION, ADD_QUESTION_ERROR } from "../../actions/types";
import { compose } from "redux";
import axios from "axios";
import requireAuth from "../../hoc/requireAuth";
class PostQuestions extends Component {
  onSubmit = async (formValues, dispatch) => {
    try {
      await axios.post("/api/post", formValues, {
        headers: { authorization: localStorage.getItem("token") },
      });
      console.log("iam hit ");
      dispatch({ type: ADD_QUESTION });
    } catch (e) {
      dispatch({ type: ADD_QUESTION_ERROR, payload: e });
    }
  };
  renderQuestion = ({ input, meta }) => {
    return (
      <>
        <Form.Input
          {...input}
          error={meta.touched && meta.error}
          fluid
          autoComplete='off'
          placeholder='Question'
        />
      </>
    );
  };
  renderAnswer = ({ input, meta }) => {
    return (
      <>
        <Form.Input
          {...input}
          error={meta.touched && meta.error}
          fluid
          autoComplete='off'
          placeholder='Answer'
        />
      </>
    );
  };
  render() {
    const { handleSubmit } = this.props;
    console.log(this.props);
    return (
      <>
        <Header
          as='h2'
          color='teal'
          textAlign='center'
          content='Welcome to do the todo app'
        />
        <Form size='large' onSubmit={handleSubmit(this.onSubmit)}>
          <Segment stacked>
            <Field name='question' component={this.renderQuestion} />
            <Field name='answer' component={this.renderAnswer} />
            <Button type='submit' fluid color='teal' content='submit' />
          </Segment>
        </Form>
      </>
    );
  }
}

export default compose(
  reduxForm({ form: "postQuestions" }),
  requireAuth
)(PostQuestions);
