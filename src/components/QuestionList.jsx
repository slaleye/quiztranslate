import React from "react";
import { Question } from "./Question";
import { AddQuestionForm } from "./AddQuestionForm";

export const QuestionList = ({ questions, dispatch }) => {
  if (!questions || !questions.length) {
   return(<></>)
  }

  return (
    <ul className="questionList">
      <AddQuestionForm/>
      {questions.map((question) => (
        <Question key={question.id} question={question} dispatch={dispatch} />
      ))}
    </ul>
  );
};
