import IQuestion from "./IQuestion";

export default interface IQuiz {
  name: string;
  questions: Array<IQuestion>;
  imageUrl: string;
  description: string;
  createdAt: Date;
}
