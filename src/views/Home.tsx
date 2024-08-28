import React from "react";
import StepCard from "../components/StepCard";
import TotalStepCard from "../components/TotalStepCard"; // Import the new TotalStepCard
import { useNavigate } from "react-router-dom";
import useStore from "../store/useStore";
import Button from "../components/Button";
import { ReactComponent as PlayIcon } from "../assets/images/Group_431.svg";

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
      <div className='flex items-center justify-between w-full'>
        <div className='w-1/3'> {/* Empty div */} </div>

        <div className='mt-8 text-xl font-bold relative text-center'>
          <TotalStepCard key={steps.length} name='Total' estimate={totalCost} />
        </div>

        <div className='w-1/3'>
          <Button
            onClick={handleContinue}
            className='h-[50px] w-[150px] justify-between'
          >
            <p className='px-4'>Continue</p>
            <PlayIcon className='w-7 h-7' />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
