import React, { useState } from "react";
import { Step } from "../types/types";

const StepCard: React.FC<Step> = ({ name, estimate, selected, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);
  const bgColor = selected || isHovered ? "bg-purple-800" : "bg-white";
  const textColor = selected || isHovered ? "text-white" : "text-purple-600";
  const estimateColor =
    selected || isHovered ? "text-white" : "text-purple-300";

  // Next: to update svg transition with card hover to match card transition
  return (
    <div
      className={`flex items-center p-6 rounded-full shadow-md cursor-pointer ${bgColor} ${textColor} transition-colors duration-75`}
      onClick={onSelect}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='flex items-center flex-grow justify-between w-96'>
        <div className='text-lg font-medium'>{name}</div>
        <div className='flex-column text-center'>
          <div className={`text-sm font-semibold ${estimateColor}`}>
            ESTIMATE
          </div>
          <div>£{estimate.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default StepCard;
