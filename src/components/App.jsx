import React, { useState } from "react";
import { QuizList } from "./QuizList";

import { quizzes as quizList } from "../core/quiz";
import { AddQuizForm } from "./AddQuizForm";

const App = () => {
  const [quizzes, setQuizzes] = useState(quizList);

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <AddQuizForm/>
      <QuizList quizzes={quizzes} />
    </div>
  );
};

export default App;
