import IUserChoice from "./IUserChoice";
import IQuiz from "./IQuiz";

export default interface IQuizState {
  userName: string;
  status: string;
  score: number;
  currentQuiz: IQuiz | null;
  userChoices: Array<IUserChoice>;
  startDateTime: Date | null;
  endDateTime: Date | null;
}
