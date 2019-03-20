import {
  SIGN_UP_PENDING,
  SIGN_UP_FULFILLED,
  SIGN_UP_REJECTED,
  LOGIN_PENDING,
  LOGIN_FULFILLED,
  LOGIN_REJECTED
} from "./constants";

export const initialState = {
  user: {},
  pending: false,
  error: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP_PENDING:
      return { ...state, pending: action.pending, error: action.error };
    case SIGN_UP_FULFILLED:
      return { ...state, pending: action.pending, user: action.payload };
    case SIGN_UP_REJECTED:
      return { ...state, pending: action.pending, error: action.error };
    case `${LOGIN_PENDING}`:
      return { ...state, pending: action.pending, error: action.error };
    case LOGIN_FULFILLED:
      return { ...state, pending: action.pending, user: action.payload.data };
    case LOGIN_REJECTED:
      return { ...state, error: "Username OR password is incorrect" };
    // case `${GET_USER}_FULFILLED`:
    //   return { ...state, user: action.payload.data };
    default:
      return state;
  }
}
