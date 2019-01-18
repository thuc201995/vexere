import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { apiMiddleware } from "redux-api-middleware";
import jobList from "./reducers/JobListReducer";
import ReduxThunk from "redux-thunk";

const AllReducer = combineReducers({ jobList });
const store = createStore(
  AllReducer,
  applyMiddleware(apiMiddleware, ReduxThunk)
);

export default store;
