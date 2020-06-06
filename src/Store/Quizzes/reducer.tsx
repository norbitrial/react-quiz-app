import types from "./types";
import IQuiz from "../../Interfaces/IQuiz";

const initialState: Array<IQuiz> = [
  {
    name: "Digital Marketing Quiz Template",
    createdAt: new Date("2019-05-02"),
    questions: [],
    imageUrl: "/assets/quiz01.jpeg",
    description:
      "The digital marketing quiz of the year—ready for you to make your own",
  },
  {
    name: "Social Media Quiz Template",
    createdAt: new Date("2020-04-29"),
    questions: [],
    imageUrl: "/assets/quiz02.jpeg",
    description:
      "Use this social media quiz template to engage your followers or quiz your team",
  },
  {
    name: "Online Science Quiz Template",
    createdAt: new Date("2019-03-02"),
    questions: [
      {
        text: "Do you like dogs?",
        answers: [
          { answer: "yes", id: 1 },
          { answer: "no", id: 2 },
        ],
        correctAnswer: 1,
      },
      {
        text: "Do you like cats?",
        answers: [
          { answer: "kind of", id: 1 },
          { answer: "yes", id: 2 },
        ],
        correctAnswer: 2,
      },
    ],
    imageUrl: "/assets/quiz03.jpeg",
    description: "Easily create a fun and educational science quiz",
  },
  {
    name: "Geography Quiz Template",
    createdAt: new Date("2020-04-29"),
    questions: [],
    imageUrl: "/assets/quiz05.jpeg",
    description: "Create your own interactive geography quiz in minutes",
  },
];

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case types.DEFAULT_STATE:
      return state;
    default:
      return state;
  }
}
