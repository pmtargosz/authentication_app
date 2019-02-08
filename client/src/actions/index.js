import { AUTH_USER, AUTH_ERROR } from "./types";
import backEndServer from "../apis/backEndServer";

export const signup = ({ email, password }, callback) => async dispatch => {
  try {
    const response = await backEndServer.post("/signup", {
      email,
      password
    });

    dispatch({
      type: AUTH_USER,
      payload: response.data.token
    });

    localStorage.setItem("token", response.data.token);

    callback();
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err.response.data.error
    });
  }
};

export const signout = () => {
  localStorage.removeItem("token");

  return {
    type: AUTH_USER,
    payload: ""
  };
};

export const signin = ({ email, password }, callback) => async dispatch => {
  try {
    const response = await backEndServer.post("/signin", {
      email,
      password
    });

    dispatch({
      type: AUTH_USER,
      payload: response.data.token
    });

    localStorage.setItem("token", response.data.token);
    callback();
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: "Invalid login credentials"
    });
  }
};
