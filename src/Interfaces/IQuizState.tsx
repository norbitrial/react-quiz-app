import IUserChoice from "./IUserChoice";

export default interface IQuizState {
  userName: string;
  status: string;
  score: number;
  userChoices: Array<IUserChoice>;
  startDateTime: Date;
  endDateTime: Date;
}
