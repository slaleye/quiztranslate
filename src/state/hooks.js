import { useContext } from 'react';
import { ActionsContext, QuizzesContext } from './context';

export const useActions = () => {
  return useContext(ActionsContext);
};

export const useQuizzes = () => {
  const quizzes = useContext(QuizzesContext);
  return quizzes;
};