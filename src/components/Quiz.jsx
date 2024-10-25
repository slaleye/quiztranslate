import React from "react";
import { QuestionList } from "./QuestionList";
import { AddQuestion } from "./AddQuestion";
import { useActions } from "../state/hooks";

export const Quiz = ({ quiz }) => {
  const { removeQuiz } = useActions();

  if (!quiz) {
    return <></>;
  }

  return (
    <li key={quiz.name} className="quiz">
      <div className="quizTitle">
        <span>{quiz.name}</span>
        <div className="buttonList">
          <button className="buttonBlue">Edit</button>{" "}
          <button
            className="buttonRed"
            onClick={() => removeQuiz({ quizId: quiz.id })}
          >
            Delete
          </button>
        </div>
      </div>
      <AddQuestion quizId={quiz.id} />
      <QuestionList quizId={quiz.id} questions={quiz.questions} />
    </li>
  );
};
