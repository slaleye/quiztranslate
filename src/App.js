import React from "react";
import styles from "./App.module.css";

const quizList = [
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
  return (
    <div className={styles.App}>
      <h1>Quizz App</h1>
      <p>Current Quizes</p>
      <ul>
        {quizList.map((quizz) => {
          console.log(quizz);
          return <li>{quizz.name}</li>;
        })}
      </ul>

      <button>Add New Quiz</button>
    
    </div>
  );
};

export default App;
