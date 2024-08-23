import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Questions from "./views/Questions";
import Results from "./views/Results";

const App: React.FC = () => {
  return (
    <>
      <div className='background-container'></div>
      <div className='relative'>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/questions' element={<Questions />} />
            <Route path='/results' element={<Results />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
