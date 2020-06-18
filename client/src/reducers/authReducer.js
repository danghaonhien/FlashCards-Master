import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  USER_LOADED,
  AUTH_USER_ERROR,
  SIGNOUT,
} from "../actions/types";

const INITIAL_STATE = {
  token: localStorage.getItem("token"),
  authenticated: null,
  loading: true,
  user: null,
};

export default function (state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        authenticated: true,
        loading: false,
        user: payload,
      };
    case SIGNUP_SUCCESS:
    case SIGNIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        authenticated: true,
        loading: false,
      };
    case SIGNUP_FAIL:
    case SIGNIN_FAIL:
    case AUTH_USER_ERROR:
    case SIGNOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        authenticated: false,
        loading: false,
      };

    default:
      return state;
  }
}
