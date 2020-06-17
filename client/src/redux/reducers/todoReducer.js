import { GET_TODOS, CREATE_TODO, LOADING, UPDATE_TODO, MARK_TODO } from "../types";

const initialState = {
  todos: [],
  todo: {},
  loading: false
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TODOS:
    case UPDATE_TODO:
      return {
        ...state,
        todos: payload,
        loading: false
      };
    case CREATE_TODO:
      return {
        ...state,
        todos: [payload, ...state.todos],
        loading: false
      };
    case MARK_TODO:
      return {
        ...state,
        todo: payload,
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
