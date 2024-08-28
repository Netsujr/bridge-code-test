import React, { useState } from "react";
import { Step } from "../types/types";
import CheckMark from "./icons/CheckMark";

const StepCard: React.FC<Step> = ({
  name,
  estimate,
  selected = false,
  onSelect,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // colors based on selection and hover state
  const isActive = selected || isHovered;
  const bgColor = isActive ? "bg-purple-800" : "bg-white";
  const textColor = isActive ? "text-white" : "text-purple-800";
  const estimateColor = isActive ? "text-white" : "text-purple-300";
  const valueColor = isActive ? "text-white" : "text-purple-800";

  // common classes
  const cardClasses = `flex items-center p-6 rounded-full shadow-md ${bgColor} ${textColor} transition-colors duration-75`;
  const textClasses = "text-lg font-medium";
  const cursorClass = "cursor-pointer";

  return (
    <div
      className={`${cardClasses} ${cursorClass}`}
      onClick={onSelect}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <div className='flex items-center flex-grow justify-between w-96'>
        <CheckMark selected={selected} hover={isHovered} />
        <div className={textClasses}>{name}</div>
        <div className='flex flex-col items-center'>
          <div className={`text-sm font-semibold ${estimateColor}`}>
            ESTIMATE
          </div>
          <div className={valueColor}>£{estimate.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default StepCard;
