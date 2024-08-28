import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import QuestionForm from "../components/QuestionForm";
import useStore from "../store/useStore";
import questions from "../data/FormQuestions";
import Button from "../components/Button";
import { ReactComponent as PrevIcon } from "../assets/images/Path_281.svg";
import { ReactComponent as NextIcon } from "../assets/images/Path_280.svg";

const variants = {
  initial: (direction: any) => ({ opacity: 0, x: 150 * direction }),
  animate: { opacity: 1, x: 0 },
  exit: (direction: any) => ({ opacity: 0, x: -150 * direction }),
};

const Questions: React.FC = () => {
  const [direction, setDirection] = useState(1);
  const navigate = useNavigate();

  const {
    currentIndex,
    answers,
    setCurrentIndex,
    setTransitioning,
    setAnswer,
  } = useStore();

  const handleNext = () => {
    setAnswer(currentIndex, answers[currentIndex]);
    setDirection(1);

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
    setDirection(-1);

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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const numericValue = value.replace(/[^0-9]/g, "");
    setAnswer(currentIndex, numericValue);
  };

//  const getPreviousAnswers = () => {
//    return questions.slice(0, currentIndex).map((question, index) => (
//      <div key={index} className='mb-2 text-xl font-medium bg-transparent'>
//        {question.text} : {answers[index]}
//      </div>
//    ));
//  };

  return (
    <div className='flex min-h-screen p-[20rem] items-center justify-center'>
      <div className='relative flex flex-col w-2/3 h-full justify-center items-center'>
        <div className='flex items-center w-full'>
          <div className='flex-1 flex justify-center'>
            <Button
              onClick={handlePrev}
              className='bg-red-600 text-white w-[40px] h-[40px] justify-center'
              children={<PrevIcon className='mr-1' />}
            />
          </div>

          <AnimatePresence mode='wait'>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial='initial'
              animate='animate'
              exit='exit'
              variants={variants}
              transition={{ duration: 0.3 }}
              className='flex-1 flex justify-center'
            >
              <QuestionForm question={questions[currentIndex].text} />
            </motion.div>
          </AnimatePresence>

          <div className='flex-1 flex justify-center'>
            <Button
              onClick={handleNext}
              className='bg-red-600 text-white w-[40px] h-[40px] justify-center'
              children={<NextIcon />}
            />
          </div>
        </div>
        <div className='flex-1 flex justify-center font-light text-gray-500 text-sm'>
          {`${currentIndex + 1} of ${questions.length}`}
        </div>

        {/* <AnimatePresence>
          {currentIndex > 0 && (
            <motion.div
              key='previous-answers'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className='absolute bottom-[-200px] left-0 w-full p-4 shadow-md'
            >
              {getPreviousAnswers()}
            </motion.div>
          )}
        </AnimatePresence> */}
      </div>

      <div className='flex w-1/3 justify-center items-center mr-20'>
        <input
          type='text'
          placeholder='Type here'
          className='p-2 border border-gray-600 rounded-md w-48 ml-20 shadow-sm shadow-gray-700'
          value={answers[currentIndex] || ""}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Questions;
