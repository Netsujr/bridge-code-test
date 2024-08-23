import React from "react";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  const text = "Calculating Your Total Costs";
  const resultsText = " - Your Results";
  const results = path === "/results";

  return (
    <h1
      className='text-3xl font-bold text-red-600 mb-8 text-center absolute'
      style={{ top: "15%", left: "50%", transform: "translateX(-50%)" }}
    >
      {text}
      {results && resultsText}
    </h1>
  );
};

export default Header;
