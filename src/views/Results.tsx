import React from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../store/useStore";
import { Step } from "../types/types";
import Button from "../components/Button";
import { ReactComponent as PlayIcon } from "../assets/images/Group_431.svg";
import ResultsPill from "../components/ResultsPill";
import TotalResultsPill from "../components/TotalResultsPill";

const formatNumber = (number: number) => {
  return new Intl.NumberFormat(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);
};

const Results: React.FC = () => {
  const navigate = useNavigate();
  const { steps, answers, resetState } = useStore();

  const estimateTotal = (ids: number[]): number => {
    return steps
      .filter((step: Step) => step.selected && ids.includes(step.id))
      .reduce((total: any, step: any) => total + step.estimate, 0);
  };

  const answer1 = answers[0] ?? 0;
  const answer2 = answers[1] ?? 0;
  const answer3 = answers[2] ?? 0;

  const supplierAndProduct = estimateTotal([1, 2]) * answer2;
  const quotationToOrderProcess = estimateTotal([3, 4, 5, 6]) * answer2;
  const expeditingAndReceivingOrders = estimateTotal([7]) * answer1;
  const processingInvoices = estimateTotal([8]) * answer2;
  const payingSuppliers = estimateTotal([9]) * answer3;

  const totalCost =
    supplierAndProduct +
    quotationToOrderProcess +
    expeditingAndReceivingOrders +
    processingInvoices +
    payingSuppliers;

  const handleStartOver = () => {
    resetState();
    navigate("/");
  };

  const handleBack = () => {
    navigate("/questions");
  };

  const rows = [
    { text: "Supplier and Product Costs", cost: supplierAndProduct },
    { text: "Quotation to Order Process Costs", cost: quotationToOrderProcess },
    {
      text: "Expediting and Receiving Orders Costs",
      cost: expeditingAndReceivingOrders,
    },
    { text: "Processing Invoices Costs", cost: processingInvoices },
    { text: "Paying Suppliers Costs", cost: payingSuppliers },
  ];

  const formattedRows = rows.map((row: any) => ({
    ...row,
    cost: formatNumber(row.cost),
  }));

  const formattedTotal = formatNumber(totalCost);

  return (
    <div className='min-h-screen flex items-center justify-center p-12'>
      <div className='p-12 w-1/2'>
        <h2 className='mb-8 text-[24px] font-bold text-red-600'>
          By utilising the Bridge Sales Enablement Agency calculator,
          organisations can simplify the processes associated with indirect
          procurement and unlock significant typical savings of up to 60% of
          process costs.
        </h2>

        <p>
          Based on what you have told us about your process we can estimate that
          the following costs are being incurred within your procurement
          processes.
        </p>
        <Button onClick={handleBack} className='mt-10'>
          <PlayIcon className='w-7 h-7 transform -scale-x-100' />
          <p className='px-4'>Go back</p>
        </Button>
      </div>

      <div className='w-1/2'>
        {formattedRows.map((row: any, index: number) => (
          <ResultsPill key={index} text={row.text} cost={row.cost} />
        ))}

        <TotalResultsPill
          text='Total Process Costs (year)'
          cost={formattedTotal}
        />

        <div className='flex-column mt-6'>
          <Button
            onClick={handleStartOver}
            className='px-8 py-2 mb-4'
          >
            Send me this report
          </Button>

          <Button
            onClick={handleStartOver}
            className='px-8 py-2'
          >
            Start Over
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;
