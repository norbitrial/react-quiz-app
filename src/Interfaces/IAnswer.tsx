import IQuestion from "./IQuestion";

export default interface IAnswer {
  id: number;
  question: IQuestion;
  answer: string;
}
