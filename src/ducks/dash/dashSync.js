import {
  GET_ALL_CHARS_PENDING,
  GET_ALL_CHARS_FULFILLED,
  GET_ALL_CHARS_REJECTED,
  RESET_ERROR
} from "../constants";

export function getAllCharsPending() {
  return {
    type: GET_ALL_CHARS_PENDING,
    pending: true
  };
}

export function getAllCharsFilled(allChars) {
  return {
    type: GET_ALL_CHARS_FULFILLED,
    payload: allChars.data,
    pending: false
  };
}

export function getAllCharsRejected() {
  return {
    type: GET_ALL_CHARS_REJECTED,
    pending: false,
    error: true
  };
}

export function resetError() {
  return {
    type: RESET_ERROR,
    error: false
  };
}
