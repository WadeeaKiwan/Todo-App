import {
  GET_TODOS,
  GET_TODO,
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

  switch (type) {
    case UPDATE_TODO:
    case GET_TODOS:
    case MARK_TODO:
      return {
        ...state,
        todos: payload,
        loading: false
      };
    case GET_TODO:
      return {
        ...state,
        todo: payload,
        loading: false
      };
    case CREATE_TODO:
      return {
        ...state,
        todos: [payload, ...state.todos],
        loading: false
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload.todoId),
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
