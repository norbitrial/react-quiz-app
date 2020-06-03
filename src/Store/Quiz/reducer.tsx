import types from "./types";
import IQuizState from "../../Interfaces/IQuizState";

const initialState: IQuizState = {};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case types.DEFAULT_STATE:
      return state;
    default:
      return state;
  }
}
