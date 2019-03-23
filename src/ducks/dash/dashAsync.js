import {
  getAllCharsPending,
  getAllCharsFilled,
  getAllCharsRejected
} from "./dashSync";
import axios from "axios";

export function getAllCharData(username) {
  return async dispatch => {
    await dispatch(getAllCharsPending());
    try {
      const response = await axios.get(`/${username}/characters/all`);
      dispatch(getAllCharsFilled(response));
    } catch {
      dispatch(getAllCharsRejected());
    }
  };
}
