export interface Step {
  id: number;
  name: string;
  estimate: number;
  selected?: boolean;
  total?: boolean;
  onSelect?: () => void;
}

interface TotalStepProps {
  name: string;
  estimate: number;
}
export interface DummyData {
  total_cost: number;
  steps: Step[];
}

export interface Questions {
  text: string;
  value: number;
}

interface QuestionFormProps {
  question: string;
}

export interface TableData {
  [key: string]: Questions;
}

interface CheckMarkProps {
  selected: boolean;
  hover: boolean;
}

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

interface PillProps {
  text: string;
  cost: string;
  isTotal?: boolean;
}
