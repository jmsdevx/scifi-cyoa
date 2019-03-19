import {
  SIGN_UP_PENDING,
  SIGN_UP_FULFILLED,
  SIGN_UP_REJECTED
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

// export function login(username, password) {
//   return {
//     type: LOGIN,
//     payload: axios.post("/auth/login", { username, password })
//   };
// }

// export function getUser() {
//   return {
//     type: GET_USER,
//     payload: axios.get("/auth/user")
//   };
// }
