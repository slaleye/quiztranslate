import React, { useReducer } from "react";
import { QuizList } from "./QuizList";
import { AddQuizForm } from "./AddQuizForm";
import { reducer } from "../lib/reducer";
import { quizzes as initialQuizList } from "../core/quiz";
import { QuizDispatchContext } from "../lib/context";

const App = () => {
  const [quizzes, dispatch] = useReducer(reducer, initialQuizList);
  console.log(quizzes);

  return (
    <QuizDispatchContext.Provider value={dispatch}>
      <div className="App">
        <h1>Quiz App</h1>
        <AddQuizForm />
        <QuizList quizzes={quizzes} />
        <span className="version">V 0.1</span>
      </div>
    </QuizDispatchContext.Provider>
  );
};

export default App;
