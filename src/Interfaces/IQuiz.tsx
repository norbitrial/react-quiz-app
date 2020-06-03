import IQuestion from "./IQuestion";

export default interface IQuiz {
  name: string;
  questions: Array<IQuestion>;
  createdAt: Date;
}
