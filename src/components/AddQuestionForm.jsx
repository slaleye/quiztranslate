import React, { useState } from "react";
import { addNewQuestionAction, resetQuizAction } from "../lib/actions";

export const AddQuestionForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
