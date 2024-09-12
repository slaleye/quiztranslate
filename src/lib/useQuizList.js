import { quizzes } from "../core/quiz";
import { useState, useEffect } from "react";

export const useQuizList = () => {
  const [quizList, setQuizList] = useState([]);

  useEffect(() => {
    setQuizList(quizzes);
  }, []);

  console.log(quizList)
  return { quizList, setQuizList};
};
