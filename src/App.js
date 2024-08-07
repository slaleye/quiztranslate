import React, { useState } from "react";
import styles from "./App.module.css";

const initialQuizList = [
  {
    id: 1,
    name: "German States",
    questions: [
      {
        id: 1,
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
        id: 2,
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
    id: 2,
    name: "German Law",
    questions: [
      {
        id: 1,
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
        id: 2,
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
      const newQuizz = { id:randomId() ,name: newQuizzName, questions: [] };
      setQuizzes((oldQuizzes) => [...oldQuizzes, newQuizz]);
      setNewQuizzName("");
    }
  };

  const deleteQuizz = (id) => {
    if (id) {
      setQuizzes((oldQuizzes) => [...oldQuizzes.filter( (quizz) => quizz.id !== id )]);
    }
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

function QuizzList({ quizzes , deleteQuizz }) {
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
                <button className={styles.buttonRed} onClick={() => deleteQuizz(quizz.id)}>Delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

function randomId(){
  return Math.round(Math.random() * 100)
}
export default App;
