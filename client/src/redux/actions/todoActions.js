import {
  GET_TODOS,
  GET_TODO,
  TODO_LOADING,
  CREATE_TODO,
  UPDATE_TODO,
  MARK_TODO,
  DELETE_TODO,
  SEARCH_TODOS,
  CREATE_TODO_FAIL,
  UPDATE_TODO_FAIL
} from "../types";
import axios from "axios";

import { toast } from 'react-toastify';

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

export const getTodo = (todoId) => async (dispatch) => {
  try {
    dispatch({ type: TODO_LOADING });

    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/todos/${todoId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    });

    dispatch({
      type: GET_TODO,
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

    toast.success("Todo Created Successfully");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => toast.error(error.msg));
    }

    dispatch({
      type: CREATE_TODO_FAIL,
      payload: err.response.data.errors
    });
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

    toast.success("Todo Updated Successfully");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => toast.error(error.msg));
    }

    dispatch({
      type: UPDATE_TODO_FAIL,
      payload: err.response.data.errors
    });
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
      payload: { ...res.data, todoId }
    });

    toast.success("Todo Deleted Successfully");
  } catch (err) {
    console.error(err.message);
  }
};

export const searchTodos = (searchText) => async (dispatch) => {
  try {
    dispatch({
      type: SEARCH_TODOS,
      payload: searchText
    });
  } catch (error) {
    console.log(error);
  }
};
