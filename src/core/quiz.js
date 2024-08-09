/**
 * Contains the business logic for Quizzes
 */

export let quizzes = [
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

let quizIdCounter = 2;

export function createQuiz(name) {
  if (!name) {
    return;
  }
  const newQuiz = { id: getQuizId(), name: name, questions: [] };
  quizzes = [...quizzes, newQuiz];
  return newQuiz;
}

export function findQuiz(id) {
  return quizzes.filter((quiz) => quiz.id === id);
}

export function removeQuiz(id) {
  const quiz = findQuiz(id);

  if (!quiz) return;

  const filteredQuizList = quizzes.filter((quiz) => quiz.id !== id);
  quizzes = [...filteredQuizList];
  return quiz;
}

function getQuizId() {
  quizIdCounter += 1;
  return quizIdCounter;
}
