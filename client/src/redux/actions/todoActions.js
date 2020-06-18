import {
  GET_TODOS,
  TODO_LOADING,
  CREATE_TODO,
  UPDATE_TODO,
  MARK_TODO,
  DELETE_TODO
} from "../types";
import axios from "axios";

export const getTodosByUserId = (userId) => async (dispatch) => {
  try {
    dispatch({ type: TODO_LOADING });

    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/todos/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    });

    dispatch({
      type: GET_TODOS,
      payload: res.data
    });
  } catch (err) {
    console.error(err.message);
  }
};

export const createTodo = (payload) => async (dispatch) => {
  try {
    dispatch({ type: TODO_LOADING });

    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/todos/`,
      JSON.stringify(payload),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`
        }
      }
    );

    dispatch({
      type: CREATE_TODO,
      payload: res.data
    });
  } catch (err) {
    console.error(err.message);
  }
};

export const updateTodo = (todoId, payload) => async (dispatch) => {
  try {
    dispatch({ type: TODO_LOADING });

    const res = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/todos/update/${todoId}`,
      JSON.stringify(payload),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`
        }
      }
    );

    dispatch({
      type: UPDATE_TODO,
      payload: res.data
    });
  } catch (err) {
    console.error(err.message);
  }
};

export const markTodo = (todoId, payload) => async (dispatch) => {
  try {
    const res = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/todos/${todoId}/done`,
      JSON.stringify(payload),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`
        }
      }
    );

    dispatch({
      type: MARK_TODO,
      payload: res.data
    });
  } catch (err) {
    console.error(err.message);
  }
};

export const deleteTodo = (todoId) => async (dispatch) => {
  try {
    const res = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/todos/${todoId}/`, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    });

    dispatch({
      type: DELETE_TODO,
      payload: res.data
    });
  } catch (err) {
    console.error(err.message);
  }
};
