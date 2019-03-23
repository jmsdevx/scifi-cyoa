import {
  charPending,
  charFilled,
  charRejected,
  resetRedirect
} from "./wizSync";
import axios from "axios";

export function submitCharData(data, username, charname) {
  return async dispatch => {
    await dispatch(charPending());
    try {
      const response = await axios.post("/wizard/submit", {
        data,
        username: username,
        charname: charname
      });
      await dispatch(charFilled(response));
      dispatch(resetRedirect());
    } catch {
      dispatch(charRejected());
    }
  };
}
