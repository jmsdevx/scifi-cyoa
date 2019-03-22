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
  RESET_ERROR
} from "../constants";

export const initialState = {
  charData: {},
  pending: false,
  error: false,
  allChars: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_COLOR:
      return {
        ...state,
        charData: { color: action.payload }
      };
    case SAVE_RACE:
      return {
        ...state,
        charData: { race: action.payload }
      };
    case SAVE_ARCHETYPE:
      return {
        ...state,
        charData: { archetype: action.payload }
      };
    case SAVE_FEAR:
      return {
        ...state,
        charData: { fear: action.payload }
      };
    case SAVE_PET:
      return {
        ...state,
        charData: { pet: action.payload }
      };
    case SAVE_FAMILY:
      return {
        ...state,
        charData: { family: action.payload }
      };
    case SUBMIT_CHARACTER_PENDING:
      return {
        ...state,
        pending: action.pending
      };
    case SUBMIT_CHARACTER_FULFILLED:
      return {
        ...state,
        allChars: action.payload
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
    default:
      return state;
  }
}
