import React from "react";

interface QuestionFormProps {
  question: string;
}

const QuestionForm: React.FC<QuestionFormProps> = ({ question }) => {
  return (
    <div className='flex flex-col items-center mx-20'>
      <div className='text-xl font-medium mb-4'>{question}</div>
    </div>
  );
};

export default QuestionForm;
