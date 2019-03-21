import {
  SIGN_UP_PENDING,
  SIGN_UP_FULFILLED,
  SIGN_UP_REJECTED,
  LOGIN_PENDING,
  LOGIN_FULFILLED,
  LOGIN_REJECTED,
  GET_USER_PENDING,
  GET_USER_FULFILLED,
  GET_USER_REJECTED
} from "./constants";

export function signupPending() {
  return {
    type: SIGN_UP_PENDING,
    pending: true,
    error: false
  };
}

export function signupFulfilled(user) {
  return {
    type: SIGN_UP_FULFILLED,
    payload: user,
    pending: false
  };
}

export function signupRejected() {
  return {
    type: SIGN_UP_REJECTED,
    error: true,
    pending: false
  };
}

export function loginPending() {
  return {
    type: LOGIN_PENDING,
    pending: true,
    error: false
  };
}

export function loginFulfilled(user) {
  return {
    type: LOGIN_FULFILLED,
    payload: user,
    pending: false
  };
}

export function loginRejected() {
  return {
    type: LOGIN_REJECTED,
    error: true,
    pending: false
  };
}

export function getUserPending() {
  return {
    type: GET_USER_PENDING,
    pending: true,
    error: false
  };
}

export function getUserFulfilled(user) {
  return {
    type: GET_USER_FULFILLED,
    pending: false,
    payload: user
  };
}

export function getUserRejected() {
  return {
    type: GET_USER_REJECTED,
    error: true,
    pending: false
  };
}
