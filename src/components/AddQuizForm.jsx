import React, { useState } from "react";
import { addNewQuizAction, resetQuizAction } from "../lib/actions";

export const AddQuizForm = ({ dispatch }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewQuizAction(name));
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div className="flex-inline">
        <button
          className="buttonRed"
          onClick={(e) => dispatch(resetQuizAction())}
        >
          Reset Quiz
        </button>
        <button type="submit">Add New Quiz</button>
      </div>
    </form>
  );
};
