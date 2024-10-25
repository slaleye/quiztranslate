import React, { useState } from "react";
import { QuestionList } from "./QuestionList";
import { AddQuestion } from "./AddQuestion";
import { useActions } from "../state/hooks";

export const Quiz = ({ quiz }) => {
  const [name, setName] = useState(quiz.name);
  const { removeQuiz, updateQuiz } = useActions();

  if (!quiz) {
    return <></>;
  }

  return (
    <li key={quiz.name} className="quiz">
      <div className="quizTitle">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="buttonList">
          <button
            className="buttonBlue"
            onClick={() => updateQuiz({ quizId: quiz.id, name })}
          >
            Edit
          </button>{" "}
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
