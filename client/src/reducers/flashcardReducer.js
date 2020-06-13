import {
  GET_USER_FLASHCARDS,
  GET_USER_FLASHCARDS_ERROR,
  ADD_FLASHCARD_ERROR,
  DELETE_FLASHCARD_BY_ID_ERROR,
} from "../actions/types";
const INITIAL_STATE = {
  userFlashcards: [],
  createFlashcardError: "",
  getUserFlashcardServerError: "",
  getUserFlashcardClientError: "",
  deleteFlashcardByIdError: "",
};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USER_FLASHCARDS:
      return {
        ...state,
        userFlashcards: action.payload,
        getUserFlashcardClientError: "",
        getUserFlashcardServerError: "",
        createFlashcardError: "",
        deleteFlashcardByIdError: "",
      };
    case GET_USER_FLASHCARDS_ERROR:
      return {
        ...state,
        getUserFlashcardServerError: action.serverError,
        getUserFlashcardClientError: action.clientError,
      };
    case ADD_FLASHCARD_ERROR:
      return { ...state, createFlashcardError: action.payload };
    case DELETE_FLASHCARD_BY_ID_ERROR:
      return { ...state, deleteFlashcardByIdError: action.payload };
    default:
      return state;
  }
}
