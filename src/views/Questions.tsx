import React from "react";
import { useNavigate } from "react-router-dom";
import QuestionForm from "../components/QuestionForm";
import useStore from "../store/useStore";
import questions from "../data/FormQuestions";
import Button from "../components/Button";
import { ReactComponent as PrevIcon } from "../assets/images/Path_281.svg";
import { ReactComponent as NextIcon } from "../assets/images/Path_280.svg";

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

  return (
    <div className='flex min-h-screen p-[20rem] items-center justify-center'>
      <div className='flex flex-col w-2/3 h-full justify-center items-center'>
        <div className='flex items-center w-full'>
          <div className='flex-1 flex justify-center'>
            <Button
              onClick={handlePrev}
              className='bg-red-600 text-white w-[40px] h-[40px] justify-center'
              children={<PrevIcon className='mr-1' />}
            />
          </div>

          <div className='flex-1 flex justify-center'>
            <div
              className={`duration-300 ${
                transitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              <QuestionForm question={questions[currentIndex].text} />
              <div className='flex-1 flex justify-center font-light text-gray-500 text-sm'>
                {`${currentIndex + 1} of ${questions.length}`}
              </div>
            </div>
          </div>

          <div className='flex-1 flex justify-center'>
            <Button
              onClick={handleNext}
              className='bg-red-600 text-white w-[40px] h-[40px] justify-center'
              children={<NextIcon />}
            />
          </div>
        </div>
      </div>

      <div className='flex w-1/3 justify-center items-center mr-20'>
        <input
          type='text'
          placeholder='Type here'
          className='p-2 border border-gray-600 rounded-md w-48 ml-20 shadow-sm shadow-gray-700'
          value={answers[currentIndex]}
          onChange={(event) => setAnswer(currentIndex, event.target.value)}
        />
      </div>
    </div>
  );
};

export default Questions;
