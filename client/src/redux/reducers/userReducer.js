import { GET_USERS, LOADING, SIGNUP_USER, LOGIN_USER } from "../types";

const initialState = {
  users: [],
  user: {},
  isAuthenticated: false,
  loading: false
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
        isAuthenticated: true,
        loading: false
      };
    case LOGIN_USER:
    case SIGNUP_USER:
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
        loading: false
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
