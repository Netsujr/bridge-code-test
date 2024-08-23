import React from "react";
import { ReactComponent as AddIcon } from "../assets/images/Group 431.svg"; // Update the path to your SVG file

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className = "",
}) => {
  return (
    <button
      className={`px-8 py-2 bg-red-600 text-white rounded-full shadow-lg flex items-center ${className}`}
      onClick={onClick}
    >
      {children}
      <AddIcon className='w-5 h-5 ml-2' />{" "}
    </button>
  );
};

export default Button;
