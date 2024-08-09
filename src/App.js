import React, { useState } from "react";
import styles from "./App.module.css";

import { createQuiz, quizzes as quizList, removeQuiz } from "./core/quiz";

const App = () => {
  const [quizzes, setQuizzes] = useState(quizList);

  const [newQuizzName, setNewQuizzName] = useState("");

  const updateQuizzName = (e) => {
    return setNewQuizzName(e.target.value);
  };

  const addNewQuizz = () => {
    if (newQuizzName) {
      const newQuiz = createQuiz(newQuizzName);
      setQuizzes(quizList)
      setNewQuizzName("");
    }
  };

  const deleteQuizz = (id) => {
      const deletedQuiz = removeQuiz(id);
      setQuizzes(quizList)
  };

  return (
    <div className={styles.App}>
      <h1>Quizz App</h1>
      <p>Current Quizes</p>
      <QuizzList quizzes={quizzes} deleteQuizz={deleteQuizz} />
      <input value={newQuizzName} onChange={updateQuizzName} />
      <button onClick={addNewQuizz}>Add New Quiz</button>
    </div>
  );
};

function QuizzList({ quizzes, deleteQuizz }) {
  if (!quizzes.length) {
    return <p>There are no quizzes! Add one</p>;
  } else {
    return (
      <ul className={styles.quizList}>
        {quizzes.map((quizz) => {
          return (
            <li key={quizz.name} className={styles.quiz}>
              <span>{quizz.name}</span>
              <div className={styles.buttonList}>
                <button className={styles.buttonBlue}>Edit</button>{" "}
                <button
                  className={styles.buttonRed}
                  onClick={() => deleteQuizz(quizz.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default App;
