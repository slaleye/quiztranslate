import React from "react";
import { QuizList } from "./QuizList";
import { AddQuiz } from "./AddQuiz";
import { Provider } from "../state/context";

const App = () => {
  return (
    <React.StrictMode>
      <Provider>
        <div className="App">
          <h1>Quiz App</h1>
          <AddQuiz />
          <QuizList />
          <span className="version">V 0.1</span>
        </div>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
