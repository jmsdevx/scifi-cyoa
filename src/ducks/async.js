import {
  signupPending,
  signupFulfilled,
  signupRejected,
  loginPending,
  loginFulfilled,
  loginRejected
} from "./sync";
import axios from "axios";

export function trySignup(username, password) {
  return async dispatch => {
    await dispatch(signupPending());

    try {
      const response = await axios.post("/auth/signup", {
        username: username,
        password: password
      });
      dispatch(signupFulfilled(response));
    } catch {
      dispatch(signupRejected());
    }
  };
}

export function tryLogin(username, password) {
  return async dispatch => {
    await dispatch(loginPending());

    try {
      const response = await axios.post("/auth/login", {
        username: username,
        password: password
      });
      dispatch(loginFulfilled(response));
    } catch {
      dispatch(loginRejected());
    }
  };
}
