import {
  GET_TODOS,
  CREATE_TODO,
  TODO_LOADING,
  UPDATE_TODO,
  MARK_TODO,
  DELETE_TODO
} from "../types";

const initialState = {
  todos: [],
  todo: {},
  loading: false
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  let index;

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
      index = state.todos.findIndex((todo) => todo.id === payload.id);
      state.todos[index] = payload;

      return {
        ...state,
        todo: payload,
        loading: false
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
        loading: false
      };
    case TODO_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
