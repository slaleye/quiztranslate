export const ADD_NEW_QUIZ = "ADD_NEW_QUIZ";
export const ADD_NEW_QUESTION = "ADD_NEW_QUESTION";
export const REMOVE_QUIZ = "REMOVE_QUIZ";
export const RESET_QUIZ = "RESET_QUIZ";

export const addNewQuizAction = (name) => {
  return {
    type: ADD_NEW_QUIZ,
    payload: { name },
  };
};

export const removeQuizAction = (id) => {
  return {
    type: REMOVE_QUIZ,
    payload: { id },
  };
};

export const resetQuizAction = (name) => {
  return {
    type: RESET_QUIZ,
  };
};

export const addNewQuestionAction = (name) => {
  return {
    type: ADD_NEW_QUESTION,
    payload: { name },
  };
};
