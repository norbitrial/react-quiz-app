import IUserChoice from "./IUserChoice";
import IQuiz from "./IQuiz";

export default interface IQuizState {
  userName: string;
  status: string;
  score: number;
  currentQuiz: IQuiz;
  userChoices: Array<IUserChoice>;
  startDateTime: Date;
  endDateTime: Date;
}
