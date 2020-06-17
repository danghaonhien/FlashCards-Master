import {
  GET_QUESTIONS,
  GET_QUESTIONS_ERROR,
  ADD_QUESTION,
  ADD_QUESTION_ERROR,
  ADD_SCORE,
  ADD_SCORE_ERROR,
} from "../types";
import { setAlert } from "../alert";
import axios from "axios";
export const getQuestions = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/quiz", {
      headers: { authorization: localStorage.getItem("token") },
    });

    dispatch({ type: GET_QUESTIONS, payload: data });
  } catch (e) {
    dispatch({
      type: GET_QUESTIONS_ERROR,
      payload: "Something went wrong, please refresh the page to try again",
    });
  }
};
export const addQuestion = () => async (dispatch) => {
  try {
    const { data } = await axios.post("/api/post");
    dispatch({ type: ADD_QUESTION, payload: data });
    dispatch(setAlert("Question Added", "success"));
  } catch (e) {
    dispatch({ type: ADD_QUESTION_ERROR, payload: "Something went wrong" });
  }
};
export const addScore = () => async (dispatch) => {
  try {
    const { data } = await axios.post("/api/score");
    dispatch({ type: ADD_SCORE, payload: data });
  } catch (e) {
    dispatch({ type: ADD_SCORE_ERROR, payload: "Something went wrong" });
  }
};
