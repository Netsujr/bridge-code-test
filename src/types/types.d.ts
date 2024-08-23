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
