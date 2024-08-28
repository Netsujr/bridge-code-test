import create from "zustand";
import { devtools } from "zustand/middleware";
import dummyData from "../data/DummyData";
import questions from "../data/FormQuestions";

const useStore = create(
  devtools((set, get) => ({
    steps: dummyData.steps,
    totalCost: 0,
    results: [],

    updateSteps: (updatedSteps) => {
      const totalCost = updatedSteps
        .filter((step) => step.selected)
        .reduce((total, step) => total + step.estimate, 0);

      set({ steps: updatedSteps, totalCost });
    },

    currentIndex: 0,
    transitioning: false,
    answers: Array(questions.length).fill(""),

    setCurrentIndex: (index) => set({ currentIndex: index }),
    setTransitioning: (isTransitioning) => set({ transitioning: isTransitioning }),

    setAnswer: (index, answer) => {
      const updatedAnswers = [...get().answers];
      updatedAnswers[index] = answer;
      set({ answers: updatedAnswers });

      const results = get().calculateResults();
      set({ results });
    },

    calculateResults: () => {
      const { steps, answers } = get();

      const estimateTotal = (ids) =>
        steps
          .filter((step) => step.selected && ids.includes(step.id))
          .reduce((total, step) => total + step.estimate, 0);

      const answerMap = answers.reduce((map, answer, index) => {
        map[index] = Number(answer) || 0;
        return map;
      }, {});

      const answer1 = answerMap[0];
      const answer2 = answerMap[1];
      const answer3 = answerMap[2];

      const supplierAndProduct = estimateTotal([1, 2]) * answer2;
      const quotationToOrderProcess = estimateTotal([3, 4, 5, 6]) * answer2;
      const expeditingAndReceivingOrders = estimateTotal([7]) * answer1;
      const processingInvoices = estimateTotal([8]) * answer2;
      const payingSuppliers = estimateTotal([9]) * answer3;

      const totalCost =
        supplierAndProduct +
        quotationToOrderProcess +
        expeditingAndReceivingOrders +
        processingInvoices +
        payingSuppliers;

      return [
        { text: "Supplier and Product Costs", cost: supplierAndProduct },
        { text: "Quotation to Order Process Costs", cost: quotationToOrderProcess },
        { text: "Expediting and Receiving Orders Costs", cost: expeditingAndReceivingOrders },
        { text: "Processing Invoices Costs", cost: processingInvoices },
        { text: "Paying Suppliers Costs", cost: payingSuppliers },
        { text: "Total Process Costs (year)", cost: totalCost },
      ];
    },

    resetState: () => {
      set({
        steps: dummyData.steps.map((step) => ({ ...step, selected: false })),
        totalCost: 0,
        currentIndex: 0,
        transitioning: false,
        answers: Array(questions.length).fill(""),
        results: [],
      });
    },
  }))
);

export default useStore;
