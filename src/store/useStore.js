import create from "zustand";
import { devtools } from "zustand/middleware";
import dummyData from "../data/DummyData";


const useStore = create(
  devtools((set, get) => ({
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
  }))
);

export default useStore;
