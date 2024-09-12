import React from "react";
import { Question } from "./Question";


export const QuestionList = ({ questions }) => {
  if (!questions || !questions.length) {
   return(<></>)
  }

  return (
    <ul className="questionList">
      {questions.map((question) => (
        <Question key={question.id} question={question} />
      ))}
    </ul>
  );
};
