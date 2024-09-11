import React from "react";
import { Quiz } from "./Quiz";

export const QuizList = ({ quizzes, deleteQuiz }) => {
  if (!quizzes.length) {
    return <p>There are no quizzes! Add one</p>;
  }

  return (
    <ul className="quizList">
      {quizzes.map((quiz) => <Quiz key={quiz.name} quiz={quiz}  deleteQuiz={deleteQuiz} />)}
    </ul>
  );
};
