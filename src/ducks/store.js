import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import authReducer from "../ducks/auth/authReducer";

const logger = createLogger({
  duration: true,
  timestamp: true,
  diff: true
});

const middlewares = applyMiddleware(thunk, logger);
const store = createStore(authReducer, middlewares);

export default store;
