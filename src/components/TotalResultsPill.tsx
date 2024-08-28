import React from "react";
import { PillProps } from "../types/types";

const TotalResultsPill: React.FC<PillProps> = ({ text, cost }) => {
  return (
    <div className='flex items-center w-full mb-3 rounded-full shadow-lg bg-white'>
      <div className='flex-1 p-3 rounded-l-full bg-purple-800 text-white'>
        <p className='ml-4'>{text}</p>
      </div>
      <div className='w-1/5 p-3 rounded-r-full text-center bg-white-600 text-purple-800'>
        £{cost}
      </div>
    </div>
  );
};

export default TotalResultsPill;
