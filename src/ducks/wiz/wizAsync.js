import {
  charPending,
  charFilled,
  charRejected,
  resetCharacter,
  resetRedirect
} from "./wizSync";
import axios from "axios";

export function submitCharData(data, username, charname) {
  return async dispatch => {
    await dispatch(charPending());
    console.log(data);
    console.log(username);
    try {
      const response = await axios.post("/wizard/submit", {
        data,
        username: username,
        charname: charname
      });
      await dispatch(charFilled(response));
      // await dispatch(resetCharacter());
      dispatch(resetRedirect());
    } catch {
      dispatch(charRejected());
    }
  };
}
