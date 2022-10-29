import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { Dark } from "quasar";

export const useQuizStore = defineStore("quiz", {
  state: () => ({
    step: useStorage("quizStep", 0),
    points: useStorage("quizPoints", 0),
    finished: useStorage("finished", false),
    darkMode: useDarkModeStorage("darkMode", true),
  }),
  getters: {
    question() {
      return quizQuestions.find((q) => q.quizStep == this.step);
    },
    questionCount() {
      return quizQuestions.length;
    },
  },
  actions: {
    toggleDarkMode() {
      Dark.toggle();
      this.darkMode = Dark.isActive;
    },
    nextStep(correctAnswer) {
      if (correctAnswer) this.points++;
      if (quizQuestions.find((q) => q.quizStep == this.step + 1) == null) {
        this.finished = true;
        return;
      }
      this.step++;
    },
    resetQuiz() {
      this.step = 0;
      this.finished = false;
      this.points = 0;
    },
  },
});

const useDarkModeStorage = (key, defaultValue) => {
  return useStorage(key, defaultValue, undefined, {
    serializer: {
      read: (val) => {
        let value = JSON.parse(val);
        if (value === "auto") {
          return value;
        }
        return value === true;
      },
      write: (val) => JSON.stringify(val),
    },
  });
};

const quizQuestions = [
  {
    quizStep: 0,
    image: "https://media3.giphy.com/media/njYrp176NQsHS/giphy.gif",
    answers: [
      {
        text: "The Lord of the Rings: The Return of the King",
        correctAnswer: false,
      },
      {
        text: "The Hobbit: An Unexpected Journey",
        correctAnswer: false,
      },
      {
        text: "The Lord of the Rings: The Fellowship of the Ring",
        correctAnswer: true,
      },
      {
        text: "The Lord of the Rings: The Two Towers",
        correctAnswer: false,
      },
    ],
  },
  {
    quizStep: 1,
    image: "https://media1.giphy.com/media/t9xC86uywfQ1G/giphy.gif",
    answers: [
      { text: "Halloweentown", correctAnswer: false },
      { text: "High Fidelity", correctAnswer: false },
      { text: "Hocus Pocus ", correctAnswer: true },
      { text: "Halloweentown 2", correctAnswer: false },
    ],
  },
  {
    quizStep: 2,
    image: "https://media0.giphy.com/media/nqnWQ3ec9lRQI/giphy.gif",
    answers: [
      { text: "Con Air", correctAnswer: false },
      { text: "High Fidelity", correctAnswer: true },
      { text: "Serendipity ", correctAnswer: false },
      { text: "Being John Malkovich", correctAnswer: false },
    ],
  },
];
