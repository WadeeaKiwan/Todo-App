import {
  LOAD_USER,
  USER_LOADING,
  SIGNUP_USER,
  LOGIN_USER,
  LOAD_USER_FAIL,
  SIGNUP_USER_FAIL,
  LOGIN_USER_FAIL,
  LOGOUT_USER
} from "../types";

const initialState = {
  token: localStorage.getItem("token"),
  user: {},
  errors: [],
  isAuthenticated: false,
  loading: false
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_USER:
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
        loading: false
      };
    case LOGIN_USER:
    case SIGNUP_USER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        isAuthenticated: true,
        loading: false
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    case LOAD_USER_FAIL:
    case SIGNUP_USER_FAIL:
    case LOGIN_USER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        errors: payload,
        user: null,
        isAuthenticated: false,
        loading: false
      };
    case LOGOUT_USER:
      localStorage.removeItem("token");
      return {
        ...state,
        errors: null,
        user: null,
        isAuthenticated: false,
        loading: false
      };
    default:
      return state;
  }
};

export default userReducer;