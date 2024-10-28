import React, { useState } from "react";
import { useActions } from "../state/hooks";

export const AddQuestion = ({ quizId }) => {
  const [name, setName] = useState("");
  const { addQuestion } = useActions();

  const handleSubmit = (e) => {
    e.preventDefault();
    const question = {
      text: name,
    };
    addQuestion({ quizId: quizId, question });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Question"
      />
      <div className="flex-inline">
        <button type="submit">Add Question</button>
      </div>
    </form>
  );
};
