import React from "react";

export const Question = ({ question }) => {
  if (!question) {
    return <></>;
  }

  return (
    <li key={question.id} className="">
      <div className="questionTitle">
        <span>{question.text}</span>
        <div className="buttonList">
          <button className="buttonRed">X</button>
        </div>
      </div>
    </li>
  );
};
