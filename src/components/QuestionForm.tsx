import React from "react";
import { QuestionFormProps } from "../types/types";


const QuestionForm: React.FC<QuestionFormProps> = ({ question }) => {
  return (
    <div className='flex items-center text-center'>
      <div
        className='text-xl font-medium mb-4 break-words'
        style={{ width: "450px" }}
      >
        {question}
      </div>
    </div>
  );
};

export default QuestionForm;
