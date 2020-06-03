import IQuestion from "./IQuestion";
import IAnswer from "./IAnswer";
import IQuiz from "./IQuiz";

export default interface IUserChoice {
  quiz: IQuiz;
  question: IQuestion;
  answer: IAnswer;
  timestamp: Date;
}
