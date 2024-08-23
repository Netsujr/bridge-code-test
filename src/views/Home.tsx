import React from "react";
import StepCard from "../components/StepCard";
import useStore from "../store/useStore";
// import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const { steps, updateSteps, totalCost } = useStore();
  // const navigate = useNavigate();

  const handleSelect = (index: number) => {
    const updatedSteps = steps.map((step: any, selected: any) =>
      selected === index ? { ...step, selected: !step.selected } : step
    );
    updateSteps(updatedSteps);
  };

  const handleContinue = () => {
  };

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12'>
      <h1 className='text-3xl font-bold text-red-600 mb-8'>
        Calculating Your Total Costs
      </h1>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {steps.map((step: any, index: number) => (
          <StepCard
            key={index}
            id={step.id}
            name={step.name}
            estimate={step.estimate}
            selected={step.selected}
            onSelect={() => handleSelect(index)}
          />
        ))}
      </div>
      <div className='mt-8 text-xl font-bold'>
        Total: <span className='text-red-600'>£{totalCost.toFixed(2)}</span>
      </div>
      <button
        className='mt-4 px-8 py-2 bg-red-600 text-white rounded-full shadow-lg'
        onClick={handleContinue}
      >
        Continue
      </button>
    </div>
  );
};

export default Home;
