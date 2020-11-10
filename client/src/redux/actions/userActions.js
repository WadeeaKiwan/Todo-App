import {
  LOAD_USER,
  SIGNUP_USER,
  LOGIN_USER,
  USER_LOADING,
  SIGNUP_USER_FAIL,
  LOGIN_USER_FAIL,
  LOGOUT_USER
} from "../types";
import axios from "axios";

import { toast } from 'react-toastify';

export const loadUser = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users`, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    });

    dispatch({
      type: LOAD_USER,
      payload: res.data
    });
  } catch (err) {
    console.error(err.message);
  }
};

export const signupUser = (payload) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOADING });

    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/users/signup`,
      JSON.stringify(payload),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    dispatch({
      type: SIGNUP_USER,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => toast.error(error.msg));
    }

    dispatch({
      type: SIGNUP_USER_FAIL,
      payload: err.response.data.errors
    });
  }
};

export const loginUser = (payload) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOADING });

    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/users/login`,
      JSON.stringify(payload),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    dispatch({
      type: LOGIN_USER,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => toast.error(error.msg));
    }

    dispatch({
      type: LOGIN_USER_FAIL,
      payload: err.response.data.errors
    });
  }
};

export const logoutUser = (history) => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT_USER });

    history.push("/");
  } catch (err) {
    console.error(err.message);
  }
};
