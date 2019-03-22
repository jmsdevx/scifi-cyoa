import { charPending, charFilled, charRejected } from "./wizSync";
import axios from "axios";

export function submitCharData(data) {
  return async dispatch => {
    await charPending();
    try {
      const response = axios.post("/wizard/submit", { data });
      dispatch(charFilled(response));
    } catch {
      dispatch(charRejected());
    }
  };
}
