import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import authReducer from "../ducks/auth/authReducer";
import wizReducer from "../ducks/wiz/wizReducer";

const logger = createLogger({
  duration: true,
  timestamp: true,
  diff: true
});

const rootreducer = combineReducers({ authReducer, wizReducer });

const middlewares = applyMiddleware(thunk, logger);
const store = createStore(rootreducer, middlewares);

export default store;
