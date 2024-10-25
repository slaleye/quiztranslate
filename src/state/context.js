import React from "react";
import { createContext, useMemo, useReducer } from "react";
import { quizzesActions, quizzesReducer } from "./quizzes";

import quizData from "../lib/quizzes.json";

export const QuizzesContext = createContext({});
export const ActionsContext = createContext({});

export const Provider = ({ children }) => {
  const [quizzes, quizzessDispatch] = useReducer(quizzesReducer, quizData);

  const actions = useMemo(
    () => ({
      ...Object.keys(quizzesActions).reduce((acc, key) => {
        acc[key] = (...args) =>
          quizzessDispatch(quizzesActions[key](...args));
        return acc;
      }, {}),
    }),
    [quizzessDispatch],
  );

  return (
    <ActionsContext.Provider value={actions}>
      <QuizzesContext.Provider value={quizzes}>
        {children}
      </QuizzesContext.Provider>
    </ActionsContext.Provider>
  );
};
