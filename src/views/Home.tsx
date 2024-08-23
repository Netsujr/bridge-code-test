// Home.tsx
import React from "react";
import StepCard from "../components/StepCard";
import { useNavigate } from "react-router-dom";
import useStore from "../store/useStore";
import Button from "../components/Button";

const Home: React.FC = () => {
  const { steps, updateSteps, totalCost } = useStore();
  const navigate = useNavigate();

  const handleSelect = (index: number) => {
    const updatedSteps = steps.map((step: any, selected: any) =>
      selected === index ? { ...step, selected: !step.selected } : step
    );
    updateSteps(updatedSteps);
  };

  const handleContinue = () => {
    navigate("/questions");
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center py-12'>
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
      <div className='mt-8 text-xl font-bold relative'>
        <StepCard
          key={steps.length}
          id={steps.length}
          name='Total'
          estimate={totalCost}
          total
          />
      </div>
      <Button onClick={handleContinue} className='mt-4 absolute bottom-[275px] right-[350px] w-[150px]'>
        Continue
      </Button>
    </div>
  );
};

export default Home;
