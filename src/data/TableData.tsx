import { TableData } from "../types/types";

// track the data in the table if needed elsewhere in app (state)
const tableData: TableData = {
  supplierAndProduct: {
    text: "Supplier & product",
    value: 0,
  },
  quotationToOrderProcess: {
    text: "Quotation to order process",
    value: 0,
  },
  expeditingAndReceivingOrders: {
    text: "Expediting & receiving orders",
    value: 0,
  },
  processingInvoices: {
    text: "Processing Invoices",
    value: 0,
  },
  payingSuppliers: {
    text: "Paying suppliers",
    value: 0,
  },
  totalCosts: {
    text: "Total Process Costs (year)",
    value: 0,
  },
};

export default tableData;
