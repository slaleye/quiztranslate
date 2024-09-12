import React, { useContext } from "react";
import { Quiz } from "./Quiz";
import { QuizDispatchContext } from "../lib/context";


export const QuizList = ({ quizzes }) => {
  const dispatch = useContext(QuizDispatchContext);

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
