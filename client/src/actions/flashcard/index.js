import {
  GET_USER_FLASHCARDS,
  GET_USER_FLASHCARDS_ERROR,
  DELETE_FLASHCARD_BY_ID_ERROR,
} from "../types";
import axios from "axios";
export const getUserFlashcards = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/flashcards", {
      headers: { authorization: localStorage.getItem("token") },
    });
    dispatch({ type: GET_USER_FLASHCARDS, payload: data });
  } catch (e) {
    dispatch({
      type: GET_USER_FLASHCARDS_ERROR,
      serverError: e,
      userError: "Something went wrong, Please refresh the page!",
    });
  }
};
export const deleteFlashcardById = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/flashcards/${id}`, {
      headers: { authorization: localStorage.getItem("token") },
    });
    const { data } = await axios.get("/api/flashcards", {
      headers: { authorization: localStorage.getItem("token") },
    });
    dispatch({ type: GET_USER_FLASHCARDS, payload: data });
  } catch (e) {
    dispatch({ type: DELETE_FLASHCARD_BY_ID_ERROR, payload: e });
  }
};
