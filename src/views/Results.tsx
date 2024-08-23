import React from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../store/useStore";
import { Step } from "../types/types";

const Results: React.FC = () => {
  const navigate = useNavigate();
  const { steps, answers, resetState } = useStore();

  const estimateTotal = (ids: number[]): number => {
    return steps
      .filter((step: Step) => step.selected && ids.includes(step.id))
      .reduce((total: any, step: any) => total + step.estimate, 0);
  };

  // could grab these a different way
  const answer1 = answers[0] ?? 0;
  const answer2 = answers[1] ?? 0;
  const answer3 = answers[2] ?? 0;

  // Could pass the name here to know exactly what we're adding up
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
    { text: "Total Process Costs (year)", cost: totalCost },
  ];

  return (
    <div className='min-h-screen  flex items-center justify-center p-12'>
      <div className='p-12'>
        <h2 className='mb-16 text-red-500'>
          By utilising the Bridge Sales Enablement Agency calculator
          organisations can simplify the processes associated with indirect
          procurement and unlock significant typical savings of up to 60% of
          process costs.
        </h2>

        <p>
          Based on what you have told us about your process we can estimate that
          the following costs are being insured within your procurement
          processes.
        </p>
        <button
          className='mt-4 px-8 py-2 bg-red-600 text-white rounded-full shadow-lg'
          onClick={handleBack}
        >
          Back
        </button>
      </div>
      <div className='w-full max-w-4xl'>
        <table className='min-w-full bg-white border border-gray-200 rounded-md shadow-md'>
          <thead>
            <tr>
              <th className='py-2 px-4 border-b border-gray-300 text-left'>
                Description
              </th>
              <th className='py-2 px-4 border-b border-gray-300 text-left'>
                Cost
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row: any, index: number) => (
              <tr key={index}>
                <td
                  className={`py-2 px-4 border-b border-gray-300 ${
                    index === rows.length - 1 ? "font-bold" : ""
                  }`}
                >
                  {row.text}
                </td>
                <td
                  className={`py-2 px-4 border-b border-gray-300 ${
                    index === rows.length - 1 ? "font-bold" : ""
                  }`}
                >
                  £{row.cost.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='flex w-full'>
          <button
            className='mt-4 px-8 py-2 bg-red-600 text-white rounded-full shadow-lg'
            onClick={handleStartOver}
          >
            Send me this report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
