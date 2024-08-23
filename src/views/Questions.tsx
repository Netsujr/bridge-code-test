import React from "react";
import { useNavigate } from "react-router-dom";
import QuestionForm from "../components/QuestionForm";
import useStore from "../store/useStore";
import questions from "../data/FormQuestions";

const Questions: React.FC = () => {
  const navigate = useNavigate();
  const {
    currentIndex,
    transitioning,
    answers,
    setCurrentIndex,
    setTransitioning,
    setAnswer,
  } = useStore();

  const handleNext = () => {
    setAnswer(currentIndex, answers[currentIndex]);

    if (currentIndex < questions.length - 1) {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setTransitioning(false);
      }, 300);
    } else {
      navigate("/results");
    }
  };

  const handlePrev = () => {
    setAnswer(currentIndex, answers[currentIndex]);

    if (currentIndex > 0) {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
        setTransitioning(false);
      }, 300);
    } else {
      navigate("/");
    }
  };

  // Next: add a fixed width to the the form

  return (
    <div className='flex min-h-screen  py-12 items-center justify-center'>
      <div className='flex flex-col min-h-screen  py-12 items-center justify-center'>
        <div>
          <div className='flex items-center w-full'>
            <button
              className='px-4 py-2 bg-red-600 text-white rounded-full shadow-lg'
              onClick={handlePrev}
            >
              {/* add assets */}
              Prev
            </button>
            <div className='flex items-center'>
              <div
                className={`flex-shrink-0 mr-4 duration-300 ${
                  transitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                <QuestionForm question={questions[currentIndex].text} />
              </div>
            </div>
            <button
              className='px-4 py-2 bg-red-600 text-white rounded-full shadow-lg'
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <div>
        <input
          type='text'
          placeholder='Your answer here'
          className='p-2 border border-gray-600 rounded-md w-48 ml-20 shadow-sm shadow-gray-700'
          value={answers[currentIndex]}
          onChange={(event) => setAnswer(currentIndex, +event.target.value)}
        />
      </div>
    </div>
  );
};

export default Questions;
