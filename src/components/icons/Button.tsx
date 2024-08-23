import React from "react";

// move interfaces to types folder
interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <div></div>
  );
};

export default Button;
