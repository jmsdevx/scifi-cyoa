import {
  GET_ALL_CHARS_PENDING,
  GET_ALL_CHARS_FULFILLED,
  GET_ALL_CHARS_REJECTED,
  RESET_ERROR
} from "../constants";

const initialState = {
  allChars: [],
  pending: false,
  error: false,
  viewedChars: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CHARS_PENDING:
      return { ...state, pending: action.pending };
    case GET_ALL_CHARS_FULFILLED:
      return { ...state, pending: action.pending, allChars: action.payload };
    case GET_ALL_CHARS_REJECTED:
      return { ...state, pending: action.pending, error: action.error };
    case RESET_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
}
