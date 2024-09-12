import React, {useReducer} from "react";
import { QuizList } from "./QuizList";
import { AddQuizForm } from "./AddQuizForm";
import { reducer } from "../lib/reducer";
import { quizzes as initialQuizList } from "../core/quiz";
import { resetQuizAction } from "../lib/actions";

const App = () => {
const [quizzes, dispatch] = useReducer(reducer, initialQuizList)
console.log(quizzes)

  return (
    <div className="App">
      <h1>Quiz App</h1>

      <AddQuizForm dispatch={dispatch}/>
    
      <QuizList quizzes={quizzes} dispatch={dispatch} />
      <span className="version">V 0.1</span>
     
    </div>
  );
};

export default App;
