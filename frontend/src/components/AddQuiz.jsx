import React, { useState } from "react";
import { useActions } from "../state/hooks";

export const AddQuiz = () => {
  const [name, setName] = useState("");
  const { addQuiz } = useActions();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name?.trim().length) {
      return
    }
    addQuiz({name});
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)}  placeholder="Enter Quiz Name"/>
      <div className="flex-inline">
        {/* <button
          className="buttonRed"
          onClick={(e) => dispatch(resetQuizAction())}
        >
          Reset Quiz
        </button> */}
        <button type="submit">Add Quiz</button>
      </div>
    </form>
  );
};
