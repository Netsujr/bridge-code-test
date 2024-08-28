import React from "react";
import { TotalStepProps } from "../types/types";

const TotalStepCard: React.FC<TotalStepProps> = ({ name, estimate }) => {
  const cardClasses =
    "flex items-center p-6 rounded-full shadow-md bg-white text-purple-800 transition-colors duration-75";
  const textClasses = "px-10 text-lg font-medium text-red-600";
  const estimateClasses = "text-red-600 px-10";
  const valueColor = "text-red-600";

  return (
    <div className={cardClasses}>
      <div className='flex items-center flex-grow justify-between w-96'>
        <div className={textClasses}>{name}</div>
        <div className='flex flex-col items-center'>
          <div className={`text-sm font-semibold ${estimateClasses}`}>
            TOTAL
          </div>
          <div className={valueColor}>£{estimate.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default TotalStepCard;
