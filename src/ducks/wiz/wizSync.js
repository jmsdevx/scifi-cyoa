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
  RESET_ERROR,
  RESET_REDIRECT,
  EDIT_CHAR
} from "../constants";

export function saveColor(choiceData) {
  return {
    type: SAVE_COLOR,
    payload: { color: choiceData }
  };
}
export function saveRace(choiceData) {
  return {
    type: SAVE_RACE,
    payload: { race: choiceData }
  };
}
export function saveArchetype(choiceData) {
  return {
    type: SAVE_ARCHETYPE,
    payload: { archetype: choiceData }
  };
}
export function saveFear(choiceData) {
  return {
    type: SAVE_FEAR,
    payload: { fear: choiceData }
  };
}
export function savePet(choiceData) {
  return {
    type: SAVE_PET,
    payload: { pet: choiceData }
  };
}
export function saveFamily(choiceData) {
  return {
    type: SAVE_FAMILY,
    payload: { family: choiceData }
  };
}

export function charPending() {
  return {
    type: SUBMIT_CHARACTER_PENDING,
    pending: true
  };
}

export function charFilled(allChars) {
  return {
    type: SUBMIT_CHARACTER_FULFILLED,
    payload: allChars.data,
    pending: false,
    redirect: true
  };
}

export function charRejected() {
  return {
    type: SUBMIT_CHARACTER_REJECTED,
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

export function resetRedirect() {
  return {
    type: RESET_REDIRECT,
    redirect: false
  };
}

export function editChar(data) {
  return {
    type: EDIT_CHAR,
    payload: data,
    update: true,
  };
}
