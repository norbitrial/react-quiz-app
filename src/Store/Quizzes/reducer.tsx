import types from "./types";
import IQuiz from "../../Interfaces/IQuiz";

const initialState: Array<IQuiz> = [
  { name: "quiz 1", createdAt: new Date("2019-05-02"), questions: [] },
  { name: "quiz 2", createdAt: new Date("2020-04-29"), questions: [] },
  { name: "quiz 3", createdAt: new Date("2019-03-02"), questions: [] },
];

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case types.DEFAULT_STATE:
      return state;
    default:
      return state;
  }
}
