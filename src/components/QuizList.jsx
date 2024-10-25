import React from "react";
import { Quiz } from "./Quiz";
import { useQuizzes } from "../state/hooks";

export const QuizList = () => {

  const quizzes = useQuizzes();

  if (!quizzes || !quizzes.length) {
    return <p>There are no quizzes! Try adding a new one.</p>;
  }

  return (
    <ul className="quizList">
      {quizzes.map((quiz) => (
        <Quiz key={quiz.id} quiz={quiz} />
      ))}
    </ul>
  );
};
