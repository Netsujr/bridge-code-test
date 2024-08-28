import React from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../store/useStore";
import Button from "../components/Button";
import { ReactComponent as PlayIcon } from "../assets/images/Group_431.svg";
import ResultsPill from "../components/ResultsPill";
import TotalResultsPill from "../components/TotalResultsPill";

const formatNumber = (number: number) => {
  return new Intl.NumberFormat(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);
};

const Results: React.FC = () => {
  const navigate = useNavigate();
  const { results = [], resetState } = useStore();

  const handleStartOver = () => {
    resetState();
    navigate("/");
  };

  const handleBack = () => {
    navigate("/questions");
  };

  const displayResults =
    results.length > 0
      ? results.filter((row: any) => row.text !== "Total Process Costs (year)")
      : [{ text: "No data available", cost: 0 }];

  const totalCost =
    results.find((row: any) => row.text === "Total Process Costs (year)")?.cost || 0;

  return (
    <div className='min-h-screen flex items-center justify-center p-12'>
      <div className='p-12 w-1/2'>
        <h2 className='mb-8 text-[24px] font-bold text-red-600'>
          By utilising the Bridge Sales Enablement Agency calculator,
          organisations can simplify the processes associated with indirect
          procurement and unlock significant typical savings of up to 60% of
          process costs.
        </h2>

        <p>
          Based on what you have told us about your process, we estimate that
          the following costs are being incurred within your procurement
          processes.
        </p>
        <Button onClick={handleBack} className='mt-10'>
          <PlayIcon className='w-7 h-7 transform -scale-x-100' />
          <p className='px-4'>Go back</p>
        </Button>
      </div>

      <div className='w-1/2'>
        {displayResults.map((row: any, index: number) => (
          <ResultsPill
            key={index}
            text={row.text}
            cost={formatNumber(row.cost)}
          />
        ))}

        <TotalResultsPill
          text='Total Process Costs (year)'
          cost={formatNumber(totalCost)}
        />

        <div className='flex-column mt-6'>
          <Button onClick={handleStartOver} className='px-8 py-2 mb-4'>
            Send me this report
          </Button>

          <Button onClick={handleStartOver} className='px-8 py-2'>
            Start Over
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;
