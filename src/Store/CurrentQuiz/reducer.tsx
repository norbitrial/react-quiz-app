import types from "./types";
import IQuizState from "../../Interfaces/IQuizState";

const initialState: IQuizState = {
  currentQuiz: null,
  score: 0,
  endDateTime: null,
  startDateTime: null,
  status: "Not selected",
  userChoices: [],
  userName: "",
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case types.DEFAULT_STATE:
      return state;
    default:
      return state;
  }
}
