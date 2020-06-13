import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import alertReducer from "./alertReducer";
import questionReducer from "./questionReducer";
import flashcardReducer from "./flashcardReducer";
import { ADD_FLASHCARD } from "../actions/types";
export default combineReducers({
  profile: profileReducer,
  auth: authReducer,
  alert: alertReducer,
  quiz: questionReducer,
  flashcards: flashcardReducer,
  form: formReducer.plugin({
    addFlashcard: (state, action) => {
      switch (action.type) {
        case ADD_FLASHCARD:
          return undefined;
        default:
          return state;
      }
    },
  }),
  // form: formReducer,
});
