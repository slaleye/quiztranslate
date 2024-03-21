import React from "react";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.App}>
      <h1>Quizz App</h1>
      <p>Current Quizes</p>
       <p> Quiz A</p>
       <p> Quiz B</p>
       <p> Quiz C</p>
       <ul>
        <li>Add New Quiz</li>
        <li>Add New Question</li>
       </ul>
    </div>
  );
};

export default App;
