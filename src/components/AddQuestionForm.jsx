import React, { useState } from "react";
import { addNewQuestionAction, resetQuizAction } from "../lib/actions";

export const AddQuestionForm = ({ dispatch }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewQuestionAction(name));
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div className="flex-inline">
        <button type="submit">Add Question</button>
      </div>
    </form>
  );
};
