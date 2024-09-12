import React from "react";
import { removeQuizAction } from "../lib/actions";
import { QuestionList } from "./QuestionList";

export const Quiz = ({ quiz, dispatch }) => {
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
            onClick={() => dispatch(removeQuizAction(quiz.id))}
          >
            Delete
          </button>
        </div>
      </div>

      <QuestionList questions={quiz.questions} dispatch={dispatch} />
    </li>
  );
};
