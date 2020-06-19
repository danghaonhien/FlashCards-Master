import React, { Component } from "react";
import { List, Header, Card } from "semantic-ui-react";
import { compose } from "redux";
import { Field, reduxForm, formValues } from "redux-form";
import { connect } from "react-redux";
import requireAuth from "../../hoc/requireAuth";
import { ADD_SCORE, ADD_SCORE_ERROR } from "../../actions/types";
import axios from "axios";
import { getQuestions, getScore } from "../../actions/questions";
import ScoreModal from "./../../components/ScoreModal";
class Quiz extends Component {
  onSubmit = async (formValues, dispatch) => {
    try {
      await axios.post("/api/score", formValues, {
        headers: { authorization: localStorage.getItem("token") },
      });
      this.props.getScore();
    } catch (e) {
      dispatch({ type: ADD_SCORE_ERROR, payload: e });
    }
  };
  componentDidMount() {
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
              <Card key={_id} centered>
                <Card.Content textAlign='center'>
                  <div>
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
                </Card.Content>
              </Card>
            );
          })}
          <br></br>
          <ScoreModal score={this.props.score.score} />
        </form>
      );
    }
  };
  render() {
    // console.log(this.props.score.score);
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
    score: state.quiz.getAllScore,
  };
}
export default compose(
  reduxForm({ form: "quiz" }),
  connect(mapStateToProps, { getQuestions, getScore }),
  requireAuth
)(Quiz);
