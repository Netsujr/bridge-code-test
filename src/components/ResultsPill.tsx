import React from "react";
import { PillProps } from "../types/types";

const ResultsPill: React.FC<PillProps> = ({ text, cost, isTotal }) => {
  return (
    <div className='flex items-center w-full mb-3 rounded-full shadow-lg bg-white'>
      <div className='flex-1 p-3 rounded-l-full bg-white text-black'>
        <p className='ml-4'>{text}</p>
      </div>
      <div className='w-1/5 p-3 rounded-r-full text-center bg-red-600 text-white'>
        £{cost}
      </div>
    </div>
  );
};

export default ResultsPill;
