const QUIZZES_ADD = "QUIZZES_ADD";
const QUIZZES_REMOVE = "QUIZZES_REMOVE";
const QUIZZES_QUESTIONS_ADD = "QUIZZES_QUESTIONS_ADD";
const QUIZZES_QUESTIONS_REMOVE = "QUIZZES_QUESTIONS_REMOVE";

import { v4 as uuidv4 } from "uuid";

export const quizzesActions = {
  addQuiz: ({ name }) => ({
    type: QUIZZES_ADD,
    payload: { name },
  }),
  removeQuiz: ({ quizId }) => ({
    type: QUIZZES_REMOVE,
    payload: { quizId },
  }),
  addQuestion: ({ quizId, question }) => ({
    type: QUIZZES_QUESTIONS_ADD,
    payload: { quizId, question },
  }),
  removeQuestion: ({ quizId, questionId }) => ({
    type: QUIZZES_QUESTIONS_REMOVE,
    payload: { quizId, questionId },
  }),
};

export const quizzesReducer = (state, action) => {
  console.log({ actionCalled: action.type });
  console.log({ payload: action.payload });
  console.log({ stateBefore: state });

  if (action.type === QUIZZES_ADD) {
    if (!action.payload?.name) {
      throw new Error("Missing Name");
    }
    const quiz = { id: uuidv4(), name: action.payload.name, questions: [] };
    return [...state, quiz];
  }

  if (action.type === QUIZZES_REMOVE) {
    return state.filter((quiz) => quiz.id !== action.payload.quizId);
  }

  if (action.type === QUIZZES_QUESTIONS_ADD) {

    const quizIndex = state.findIndex(
      (quiz) => quiz.id === action.payload.quizId,
    );
    if (quizIndex < 0) {
      throw new Error("Quiz not found");
    }
    const oldQuiz = state[quizIndex];

    const question = {
      id: uuidv4(),
      text: action.payload.question.text,
      position: oldQuiz.questions.length + 1,
      answers: [],
    };

    const updatedQuiz = {
      ...oldQuiz,
      questions: [...oldQuiz.questions, question],
    };

    return [
      ...state.slice(0, quizIndex),
      updatedQuiz,
      ...state.slice(quizIndex + 1),
    ];
  }

  if (action.type === QUIZZES_QUESTIONS_REMOVE) {
    const quizIndex = state.findIndex(
      (quiz) => quiz.id === action.payload.quizId,
    );

    if (quizIndex >= 0) {
      const quiz = state[quizIndex];
      const allQuizQuestionsWithoutNew = quiz.questions.filter(
        (question) => question.id !== action.payload.questionId,
      );
      const updatedQuiz = {
        ...quiz,
        questions: allQuizQuestionsWithoutNew,
      };

      return [
        ...state.slice(0, quizIndex),
        updatedQuiz,
        ...state.slice(quizIndex + 1),
      ];
    }

    return state;
  }

  return state;
};
