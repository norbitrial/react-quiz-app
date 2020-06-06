import { combineReducers } from "redux";
import currentQuizReducer from "./CurrentQuiz/reducer";
import quizzesReducer from "./Quizzes/reducer";

export default {
  combined: combineReducers({ currentQuizReducer, quizzesReducer }),
};
