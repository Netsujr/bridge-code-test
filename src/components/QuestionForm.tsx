import React from "react";

interface QuestionFormProps {
  question: string;
}

const QuestionForm: React.FC<QuestionFormProps> = ({ question }) => {
  return (
    <div className='flex items-center text-center'>
      <div
        className='text-xl font-medium mb-4 break-words'
        style={{ width: "400px" }}
      >
        {question}
      </div>
    </div>
  );
};

export default QuestionForm;
