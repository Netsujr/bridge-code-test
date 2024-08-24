import React from "react";

interface PillProps {
  text: string;
  cost: number;
  isTotal?: boolean;
}

const ResultsPill: React.FC<PillProps> = ({ text, cost, isTotal }) => {
  return (
    <div
      className={`flex items-center w-full mb-3 rounded-full shadow-lg ${
        isTotal ? "bg-white" : "bg-white"
      }`}
    >
      <div
        className={`flex-1 p-3 rounded-l-full  ${
          isTotal ? "bg-purple-800 text-white" : "bg-white text-black"
        }`}
      >
        <p className='ml-4'> {text}</p>
      </div>
      <div
        className={`w-1/5 p-3 rounded-r-full text-center ${
          isTotal ? "bg-white-600 text-purple-800" : "bg-red-600 text-white"
        }`}
      >
        £{cost.toFixed(2)}
      </div>
    </div>
  );
};

export default ResultsPill;
