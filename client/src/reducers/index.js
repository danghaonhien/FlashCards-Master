import { combineReducers } from "redux";
// import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import alertReducer from "./alertReducer";

export default combineReducers({
  profile: profileReducer,
  auth: authReducer,
  alert: alertReducer,
});
