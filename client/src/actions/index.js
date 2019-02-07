import { AUTH_USER } from "./types";
import backEndServer from "../apis/backEndServer";

export const signup = ({ email, password }) => async dispatch => {
  //   const response =
  await backEndServer.post("/signup", { email, password });

  //   dispatch({
  //     type: AUTH_USER,
  //     payload: response.data
  //   });
};
