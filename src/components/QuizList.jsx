import React from "react";
import { Quiz } from "./Quiz";

export const QuizList = ({ quizzes, dispatch }) => {
  if (!quizzes || !quizzes.length) {
    return <p>There are no quizzes! Try adding a new one.</p>;
  }

  return (
    <ul className="quizList">
      {quizzes.map((quiz) => (
        <Quiz key={quiz.id} quiz={quiz} dispatch={dispatch} />
      ))}
    </ul>
  );
};
