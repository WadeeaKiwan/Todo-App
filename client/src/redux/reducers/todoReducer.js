import {
  GET_TODOS,
  GET_TODO,
  CREATE_TODO,
  TODO_LOADING,
  UPDATE_TODO,
  MARK_TODO,
  DELETE_TODO,
  SEARCH_TODOS,
  CREATE_TODO_FAIL,
  UPDATE_TODO_FAIL
} from "../types";

const initialState = {
  todos: [],
  filteredTodos: [],
  todo: {},
  searchText: "",
  loading: false,
  errors: null
};

const todoReducer = (state = initialState, action) => {
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
    case SEARCH_TODOS:
      return {
        ...state,
        searchText: payload,
        filteredTodos: state.todos.filter(
          (todo) => todo.category.toLowerCase().indexOf(payload.toLowerCase()) !== -1
        ),
        loading: false
      };
    case TODO_LOADING:
      return {
        ...state,
        loading: true
      };
    case CREATE_TODO_FAIL:
    case UPDATE_TODO_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload
      }
    default:
      return state;
  }
};

export default todoReducer;