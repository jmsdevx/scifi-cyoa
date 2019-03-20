import reducer from "../ducks/reducer";
import { initialState } from "../ducks/reducer";
import {
  SIGN_UP_PENDING,
  SIGN_UP_FULFILLED,
  SIGN_UP_REJECTED
} from "../ducks/constants";
import configureStore from "redux-mock-store";
import * as selectActions from "../ducks/sync";
import thunk from "redux-thunk";

const mockStore = configureStore([thunk]);
const store = mockStore(initialState);

describe("select actions", () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe("try sign up", () => {
    test("dispatches sign up pending", () => {
      const expectedActions = [
        {
          type: SIGN_UP_PENDING,
          pending: true,
          error: false
        }
      ];

      store.dispatch(selectActions.signupPending());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("authenticate reducer", () => {
  it("returns the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("handles signup request", () => {
    const action = {
      type: SIGN_UP_PENDING,
      pending: true,
      error: false
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      pending: true
    });
  });

  it("handles signup fulfilled", () => {
    const action = {
      type: SIGN_UP_FULFILLED,
      payload: { id: 1, username: "bob", hash: "bob", inprogress: false },
      pending: false
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      user: { id: 1, username: "bob", hash: "bob", inprogress: false },
      pending: false
    });
  });

  it("handles signup rejected", () => {
    const action = {
      type: SIGN_UP_REJECTED,
      pending: false,
      error: true
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      pending: false,
      error: true
    });
  });
});
