export interface DummyData {
  total_cost: number;
  steps: Step[];
}

export interface Questions {
  text: string;
  value: number;
}

export interface TableData {
  [key: string]: Questions;
}

export interface Step {
  id: number;
  name: string;
  estimate: number;
  selected: boolean;
  onSelect?: () => void;
}
