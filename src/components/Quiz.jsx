import React from "react";
import { removeQuiz } from "../core/quiz";

export const Quiz = ({ quiz }) => {
  if (!quiz) {
    return (<></>);
  }

  const deleteQuiz = (id) => {
    const deletedQuiz = removeQuiz(id);
  };

  return (
    <li key={quiz.name} className="quiz">
      <span>{quiz.name}</span>
      <div className="buttonList">
        <button className="buttonBlue">Edit</button>{" "}
        <button
          className="buttonRed"
          onClick={() => deleteQuiz(quiz.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};
