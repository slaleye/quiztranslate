import React, { useState } from "react";
import { createQuiz } from "../core/quiz";

export const AddQuizForm = () => {
  const [newQuizzName, setNewQuizzName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createQuiz(newQuizzName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={newQuizzName} onChange={e => setNewQuizzName(e.target.value)} />
      <button type="submit">Add New Quiz</button>
    </form>
  );
};
