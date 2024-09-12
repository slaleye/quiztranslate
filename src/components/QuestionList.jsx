import React from "react";
import { Question } from "./Question";

export const QuestionList = ({ questions, dispatch }) => {
  if (!questions || !questions.length) {
   return(<></>)
  }

  return (
    <ul className="questionList">
      {questions.map((question) => (
        <Question key={question.id} question={question} dispatch={dispatch} />
      ))}
    </ul>
  );
};
