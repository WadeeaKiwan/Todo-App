import {
  LOAD_USER,
  SIGNUP_USER,
  LOGIN_USER,
  USER_LOADING,
  SIGNUP_USER_FAIL,
  LOGIN_USER_FAIL,
  LOAD_USER_FAIL,
  LOGOUT_USER
} from "../types";
import axios from "axios";
import setLocalStorageToken from "../../util/setLocalStorageToken";

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setLocalStorageToken(localStorage.token);
  }

  try {
    const res = await axios.get("http://localhost:5000/api/users");

    dispatch({
      type: LOAD_USER,
      payload: res.data
    });
  } catch (err) {
    console.error(err.message);
    dispatch({
      type: LOAD_USER_FAIL,
      payload: err.response.data.errors
    });
  }
};

export const signupUser = (payload) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOADING });

    const res = await axios.post(
      `http://localhost:5000/api/users/signup`,
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
    console.error(err.message);
    dispatch({
      type: SIGNUP_USER_FAIL,
      payload: err.response.data.errors
    });
  }
};

export const loginUser = (payload) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOADING });

    const res = await axios.post(`http://localhost:5000/api/users/login`, JSON.stringify(payload), {
      headers: {
        "Content-Type": "application/json"
      }
    });

    dispatch({
      type: LOGIN_USER,
      payload: res.data
    });
  } catch (err) {
    console.error(err.message);
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
