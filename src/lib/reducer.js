import { getQuizId } from "../core/quiz";
import { ADD_NEW_QUIZ, REMOVE_QUIZ, RESET_QUIZ } from "./actions";
import { quizzes as initialQuizList } from "../core/quiz";

export const reducer = (state, action) => {
  if (action.type === ADD_NEW_QUIZ) {
    if (!action.payload.name) {
      return state;
    }
    return [
      ...state,
      { id: getQuizId(), name: action.payload.name, questions: [] },
    ];
  }

  if (action.type === REMOVE_QUIZ) {
    return state.filter((quiz) => quiz.id !== action.payload.id);
  }

  if (action.type === RESET_QUIZ) {
    console.log(initialQuizList);
    return initialQuizList;
  }

  return state;
};
