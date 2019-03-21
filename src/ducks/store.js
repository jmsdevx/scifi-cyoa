import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import auth_reducer from "../ducks/auth/auth_reducer";

const logger = createLogger({
  duration: true,
  timestamp: true,
  diff: true
});

const middlewares = applyMiddleware(thunk, logger);
const store = createStore(auth_reducer, middlewares);

export default store;
