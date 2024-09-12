import React, { useContext } from "react";
import { removeQuizAction } from "../lib/actions";
import { QuestionList } from "./QuestionList";
import { QuizDispatchContext } from "../lib/context";
import { AddQuestionForm } from "./AddQuestionForm";

export const Quiz = ({ quiz }) => {
  const dispatch = useContext(QuizDispatchContext);

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
      <AddQuestionForm />
      <QuestionList questions={quiz.questions} />
    </li>
  );
};
