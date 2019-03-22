import { charPending, charFilled, charRejected } from "./wizSync";
import axios from "axios";

export function submitCharData(data, username) {
  return async dispatch => {
    await dispatch(charPending());
    console.log(data);
    console.log(username);
    try {
      const response = await axios.post("/wizard/submit", {
        data,
        username: username
      });
      dispatch(charFilled(response));
    } catch {
      dispatch(charRejected());
    }
  };
}
