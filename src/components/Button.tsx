import React from "react";
import { ButtonProps } from "../types/types";

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className = "",
}) => {
  return (
    <button
      className={`p-2 bg-red-600 text-white rounded-full shadow-lg flex items-center ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
