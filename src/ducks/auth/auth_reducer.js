import {
  SIGN_UP_PENDING,
  SIGN_UP_FULFILLED,
  SIGN_UP_REJECTED,
  LOGIN_PENDING,
  LOGIN_FULFILLED,
  LOGIN_REJECTED,
  GET_USER_PENDING,
  GET_USER_FULFILLED,
  GET_USER_REJECTED,
  RESET_ERROR,
  RESET_USER
} from "../constants";

export const initialState = {
  user: {},
  pending: false,
  error: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP_PENDING:
      return { ...state, pending: action.pending };
    case SIGN_UP_FULFILLED:
      return { ...state, pending: action.pending, user: action.payload.data };
    case SIGN_UP_REJECTED:
      return { ...state, pending: action.pending, error: action.error };
    case `${LOGIN_PENDING}`:
      return { ...state, pending: action.pending };
    case LOGIN_FULFILLED:
      return { ...state, pending: action.pending, user: action.payload.data };
    case LOGIN_REJECTED:
      return { ...state, pending: action.pending, error: action.error };
    case GET_USER_PENDING:
      return { ...state, pending: action.pending };
    case GET_USER_FULFILLED:
      return { ...state, pending: action.pending, user: action.payload.data };
    case GET_USER_REJECTED:
      return {
        ...state,
        pending: action.pending,
        error: action.error
      };
    case RESET_ERROR:
      return {
        ...state,
        error: action.error
      };
    case RESET_USER:
      return { ...state, user: { username: "" } };
    default:
      return state;
  }
}
