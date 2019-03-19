import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import reducer from "./reducer";

const logger = createLogger({
  duration: true,
  timestamp: true,
  diff: true
});

const middlewares = applyMiddleware(thunk, logger);
const store = createStore(reducer, middlewares);

export default store;
