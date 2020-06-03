import IQuestion from "./IQuestion";
import IAnswer from "./IAnswer";

export default interface IUserChoice {
  question: IQuestion;
  answer: IAnswer;
  timestamp: Date;
}
