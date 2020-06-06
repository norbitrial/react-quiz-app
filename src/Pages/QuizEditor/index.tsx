import React from "react";
import QuizzesTable from "../../Components/QuizzesTable";
import { useSelector } from "react-redux";

const QuizEditor = () => {
  const quizzes = useSelector((state: any) => state.quizzesReducer);

  return (
    <>
      <h2>quiz editor</h2>
      <QuizzesTable data={quizzes} />
    </>
  );
};

export default QuizEditor;
