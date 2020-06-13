import React, { Component } from "react";
import { List, Header, Message } from "semantic-ui-react";
// import { Form } from 'semantic-ui-react'
import { compose } from "redux";
import { Field, reduxForm, formValues } from "redux-form";
import { connect } from "react-redux";
import requireAuth from "../../hoc/requireAuth";
import { ADD_SCORE, ADD_SCORE_ERROR } from "../../actions/types";
import axios from "axios";
import { getQuestions } from "../../actions/questions";
class Quiz extends Component {
  onSubmit = async (formValues, dispatch) => {
    console.log(formValues);
    try {
      await axios.post("/api/score", formValues, {
        headers: { authorization: localStorage.getItem("token") },
      });
      console.log("iam hit ");
    } catch (e) {
      dispatch({ type: ADD_SCORE_ERROR, payload: e });
    }
  };
  componentDidMount() {
    console.log("Inside of componentDidMount");
    this.props.getQuestions();
  }
  renderList = () => {
    if (this.props.allQuestions.length === 0) {
      return <Header content='No Questions yet' />;
    } else {
      const { handleSubmit } = this.props;
      return (
        <form onSubmit={handleSubmit(this.onSubmit)}>
          {this.props.allQuestions.map(({ _id, question, answer }, index) => {
            return (
              <div key={_id}>
                <p>{question}</p>
                <label>
                  <Field
                    name={_id}
                    component='input'
                    type='radio'
                    value='true'
                  />{" "}
                  true
                </label>
                <label>
                  <Field
                    name={_id}
                    component='input'
                    type='radio'
                    value='false'
                  />{" "}
                  false
                </label>
              </div>
            );
          })}
          <br></br>
          <button type='submit'>Submit</button>
        </form>
      );
    }
  };
  render() {
    return (
      <List celled selection size='huge'>
        {this.renderList()}
      </List>
    );
  }
}
function mapStateToProps(state) {
  return {
    allQuestions: state.quiz.getAllQuestions,
    getAllQuestionsError: state.quiz.getAllQuestionsError,
  };
}
// export default connect(mapStateToProps, { getQuestions })(Quiz);
export default compose(
  reduxForm({ form: "quiz" }),
  connect(mapStateToProps, { getQuestions }),
  requireAuth
)(Quiz);
