import React, { useState, useContext } from "react";
import { addNewQuizAction, resetQuizAction } from "../lib/actions";
import { QuizDispatchContext } from "../lib/context";

export const AddQuizForm = () => {
  const [name, setName] = useState("");
  const dispatch = useContext(QuizDispatchContext);

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
