import React from "react";

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
      className={`p-2 bg-red-600 text-white rounded-full shadow-lg flex items-center ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
