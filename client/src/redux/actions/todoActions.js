import { GET_TODOS, LOADING, CREATE_TODO, UPDATE_TODO, MARK_TODO } from "../types";
import axios from "axios";

export const getTodosByUserId = (userId) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });

    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/todos/user/${userId}`);

    dispatch({
      type: GET_TODOS,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const createTodo = (payload) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });

    const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/todos/`, payload);

    dispatch({
      type: CREATE_TODO,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = (todoId, payload) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });

    const res = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/todos/update/${todoId}`,
      payload
    );

    dispatch({
      type: UPDATE_TODO,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const markTodo = (todoId, payload) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });

    const res = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/todos/${todoId}/done`,
      payload
    );

    dispatch({
      type: MARK_TODO,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = (todoId) => async (dispatch) => {
  try {
    const res = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/todos/${todoId}/`);

    dispatch({
      type: DELETE_TODO,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};
