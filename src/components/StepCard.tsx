import React, { useState } from "react";
import { Step } from "../types/types";
import CheckMark from "./icons/CheckMark";

const StepCard: React.FC<Step> = ({
  name,
  estimate,
  selected = false,
  onSelect,
  total = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // colors based on selection, hover state, and total
  const isActive = selected || isHovered;
  const bgColor = isActive ? "bg-purple-800" : "bg-white";
  const textColor = isActive ? "text-white" : "text-purple-800";
  const estimateColor = isActive ? "text-white" : "text-purple-300";
  const valueColor = total
    ? "text-red-600" : isActive
    ? "text-white" : "text-purple-800";

  // common classes
  const cardClasses = `flex items-center p-6 rounded-full shadow-md ${bgColor} ${textColor} transition-colors duration-75`;
  const textClasses = total
    ? "px-10 text-lg font-medium"
    : "text-lg font-medium";
  const estimateClasses = total ? "text-red-600 px-10" : estimateColor;
  const cursorClass = total ? "" : "cursor-pointer";

  return (
    <div
      className={`${cardClasses} ${cursorClass}`}
      onClick={!total ? onSelect : undefined}
      onMouseEnter={() => !total && setIsHovered(true)}
      onMouseLeave={() => !total && setIsHovered(false)}
    >
      <div className='flex items-center flex-grow justify-between w-96'>
        {!total && <CheckMark selected={selected} hover={isHovered} />}
        <div className={textClasses}>{name}</div>
        <div className='flex flex-col items-center'>
          {!total && (
            <div className={`text-sm font-semibold ${estimateClasses}`}>
              ESTIMATE
            </div>
          )}
          <div className={valueColor}>£{estimate.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default StepCard;
