import {
  GET_QUESTIONS,
  GET_QUESTIONS_ERROR,
  ADD_QUESTION,
  ADD_QUESTION_ERROR,
  ADD_SCORE,
  ADD_SCORE_ERROR,
  GET_SCORE_ERROR,
  GET_SCORE,
  GET_ALL_SCORE,
  GET_ALL_SCORE_ERROR,
} from "../actions/types";
const INITIAL_STATE = {
  getAllQuestions: [],
  addQuestions: [],
  getAllQuestionsError: "",
  addQuestionError: "",
  addAllScore: "",
  addAllScoreError: "",
  getAllScore: "",
  getAllScoreError: "",
  scores: [],
  scoresError: "",
};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        getAllQuestions: action.payload,
        getAllQuestionsError: "",
      };
    case GET_QUESTIONS_ERROR:
      return { ...state, getAllQuestionsError: action.payload };
    case ADD_QUESTION_ERROR:
      return { ...state, addQuestionError: action.payload };
    case ADD_QUESTION:
      return { ...state, addQuestions: action.payload, addQuestionError: "" };
    case ADD_SCORE:
      return { ...state, addAllScore: action.payload, getAllScoreError: "" };
    case ADD_SCORE_ERROR:
      return { ...state, addAllScoreError: action.payload };
    case GET_SCORE:
      return { ...state, getAllScore: action.payload, getAllScoreError: "" };
    case GET_SCORE_ERROR:
      return { ...state, getAllScoreError: action.payload };
    case GET_ALL_SCORE:
      return { ...state, Scores: action.payload, ScoresError: "" };
    case GET_ALL_SCORE_ERROR:
      return { ...state, ScoresError: action.payload };
    default:
      return state;
  }
}
