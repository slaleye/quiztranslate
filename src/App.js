import React, { useState } from "react";
import styles from "./App.module.css";

const initialQuizList = [
  {
    name: "German States",
    questions: [
      {
        text: "What is the capital city of Bavaria (Bayern)",
        position: 1,
        answers: [
          {
            text: "Munich (München)",
            isCorrect: true,
          },
          {
            text: "Berlin",
          },
          {
            text: "Frankfurt",
          },
        ],
      },
      {
        text: "What is the capital city of Saxony (Sachsen)?",
        position: 2,
        answers: [
          {
            text: "Dresden",
            isCorrect: true,
          },
          {
            text: "Leipzig",
          },
          {
            text: "Chemnitz",
          },
        ],
      },
    ],
  },
  {
    name: "German Law",
    questions: [
      {
        text: "What is the supreme law of Germany?",
        position: 1,
        answers: [
          {
            text: "Grundgesetz",
            isCorrect: true,
          },
          {
            text: "Strafgesetzbuch",
          },
          {
            text: "Handelsgesetzbuch",
          },
        ],
      },
      {
        text: "What is the highest court in Germany?",
        position: 2,
        answers: [
          {
            text: "Bundesgerichtshof",
          },
          {
            text: "Bundesverfassungsgericht",
            isCorrect: true,
          },
          {
            text: "Oberlandesgericht",
          },
        ],
      },
    ],
  },
];

const App = () => {
  const [quizzes, setQuizzes] = useState(initialQuizList);
  const [newQuizzName, setNewQuizzName] = useState("");

  const updateQuizzName = (e) => {
    return setNewQuizzName(e.target.value);
  };

  const addNewQuizz = () => {
    if (newQuizzName) {
      const newQuizz = { name: newQuizzName, questions: [] };
      setQuizzes((oldQuizzes) => [...oldQuizzes, newQuizz]);
      setNewQuizzName("");
    }
  };
  return (
    <div className={styles.App}>
      <h1>Quizz App</h1>
      <p>Current Quizes</p>
      <QuizzList quizzes={quizzes} />
      <input value={newQuizzName} onChange={updateQuizzName} />
      <button onClick={addNewQuizz}>Add New Quiz</button>
    </div>
  );
};

function QuizzList({ quizzes }) {
  if (!quizzes) {
    return <>There are no quizzes! Add one</>;
  } else {
    return (
      <ul  className={styles.quizList}>
        {quizzes.map((quizz) => {
          return (
            <li key={quizz.name} className={styles.quiz}>
              <span>{quizz.name}</span>
              <div className={styles.buttonList}>
                <button className={styles.buttonBlue}>Edit</button>{" "}
                <button className={styles.buttonRed}>Delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default App;
