import { signupPending, signupFulfilled, signupRejected } from "./sync";
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