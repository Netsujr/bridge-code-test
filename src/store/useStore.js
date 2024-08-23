import create from "zustand";
import { devtools } from "zustand/middleware";
import dummyData from "../data/DummyData";
import questions from "../data/FormQuestions";
// import tableData from "../data/TableData";

const useStore = create(
  devtools((set, get) => ({
    // Initial data
    steps: dummyData.steps,
    totalCost: dummyData.steps
      .filter((step) => step.selected)
      .reduce((total, step) => total + step.estimate, 0),
    updateSteps: (updatedSteps) => {
      const totalCost = updatedSteps
        .filter((step) => step.selected)
        .reduce((total, step) => total + step.estimate, 0);
      set({ steps: updatedSteps, totalCost });
    },

    // Questions
    currentIndex: 0,
    transitioning: false,
    answers: Array(questions.length).fill(""),

    setCurrentIndex: (index) => set({ currentIndex: index }),
    setTransitioning: (isTransitioning) =>
      set({ transitioning: isTransitioning }),
    setAnswer: (index, answer) => {
      const updatedAnswers = [...get().answers];
      updatedAnswers[index] = answer;
      set({ answers: updatedAnswers });
    },

    // reset everything
    resetState: () => {
      set({
        steps: dummyData.steps.map((step) => ({ ...step, selected: false })),
        totalCost: 0,
        currentIndex: 0,
        transitioning: false,
        answers: Array(questions.length).fill(""),
      });
    },
  }))
);

export default useStore;
