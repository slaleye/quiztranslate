import React from "react";
import { useActions } from "../state/hooks";

export const Question = ({ question , quizId}) => {
  const { removeQuestion } = useActions();

  if (!question) {
    return <></>;
  }

  return (
    <li key={question.id} className="">
      <div className="questionTitle">
        <span>{question.text}</span>
        <div className="buttonList">
          <button
            className="buttonRed"
            onClick={() =>
              removeQuestion({ quizId: quizId, questionId: question.id })
            }
          >
            X
          </button>
        </div>
      </div>
    </li>
  );
};
