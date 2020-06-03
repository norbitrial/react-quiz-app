import { combineReducers } from "redux";
import quizReducer from "./Quiz/reducer";

export default {
  combined: combineReducers({ quizReducer }),
};
