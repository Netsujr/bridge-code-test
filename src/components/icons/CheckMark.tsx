import React from "react";
import { CheckMarkProps } from "../../types/types";


const CheckMark: React.FC<CheckMarkProps> = ({ selected, hover }) => {
  const fillColor = selected || hover ? "#ffffff" : "#5f259f";

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 32 32'
    >
      <path
        className={`w-6 h-6 ${fillColor} transition-colors duration-150`}
        d='M20,4A16,16,0,1,0,36,20,16,16,0,0,0,20,4Zm0,29.091A13.091,13.091,0,1,1,33.091,20,13.091,13.091,0,0,1,20,33.091Z'
        transform='translate(-4 -4)'
        fill={fillColor}
      />
      <path
        className={`w-6 h-6 ${fillColor} transition-colors duration-150`}
        d='M43.739,36.425a1.455,1.455,0,0,0-2.057,0L36.54,41.568l-2.057-2.057a1.455,1.455,0,0,0-2.057,2.057l3.085,3.085a1.455,1.455,0,0,0,2.057,0l6.171-6.171A1.454,1.454,0,0,0,43.739,36.425Z'
        transform='translate(-21.818 -24.363)'
        fill={fillColor}
      />
    </svg>
  );
};

export default CheckMark;
