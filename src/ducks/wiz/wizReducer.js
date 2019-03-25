import {
  SAVE_COLOR,
  SAVE_RACE,
  SAVE_ARCHETYPE,
  SAVE_FEAR,
  SAVE_PET,
  SAVE_FAMILY,
  SUBMIT_CHARACTER_PENDING,
  SUBMIT_CHARACTER_FULFILLED,
  SUBMIT_CHARACTER_REJECTED,
  RESET_CHARACTER,
  RESET_ERROR,
  RESET_REDIRECT,
  EDIT_CHAR
} from "../constants";

export const initialState = {
  charData: {},
  pending: false,
  error: false,
  allChars: [],
  redirect: false,
  update: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_COLOR:
      return {
        ...state,
        charData: { ...state.charData, ...action.payload }
      };
    case SAVE_RACE:
      return {
        ...state,
        charData: { ...state.charData, ...action.payload }
      };
    case SAVE_ARCHETYPE:
      return {
        ...state,
        charData: { ...state.charData, ...action.payload }
      };
    case SAVE_FEAR:
      return {
        ...state,
        charData: { ...state.charData, ...action.payload }
      };
    case SAVE_PET:
      return {
        ...state,
        charData: { ...state.charData, ...action.payload }
      };
    case SAVE_FAMILY:
      return {
        ...state,
        charData: { ...state.charData, ...action.payload }
      };
    case SUBMIT_CHARACTER_PENDING:
      return {
        ...state,
        pending: action.pending
      };
    case SUBMIT_CHARACTER_FULFILLED:
      return {
        ...state,
        allChars: action.payload,
        redirect: action.redirect,
        charData: {}
      };
    case SUBMIT_CHARACTER_REJECTED:
      return {
        ...state,
        error: action.error
      };
    case RESET_CHARACTER:
      return {
        ...state,
        charData: {}
      };
    case RESET_ERROR:
      return {
        ...state,
        error: action.error
      };
    case RESET_REDIRECT:
      return {
        ...state,
        redirect: action.redirect
      };
    case EDIT_CHAR:
      return {
        ...state,
        charData: action.payload,
        update: action.update
      };
    default:
      return state;
  }
}
