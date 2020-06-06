import IAnswer from "./IAnswer";

export default interface IQuestion {
  text: string;
  answers: Array<IAnswer>;
  correctAnswer: number;
}
