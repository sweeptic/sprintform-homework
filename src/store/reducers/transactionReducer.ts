import { AnyAction } from "redux";
import { ITransaction } from "store/interfaces/transactions";

interface ITransactionsState {
  transactions: Array<ITransaction>;
  currentTransaction: ITransaction;
}

const newTransaction: ITransaction = { id: null, summary: "", category: "financial", sum: 0, currency: "", paid: "" };

const initialTransactionState: ITransactionsState = {
  transactions: [],
  currentTransaction: newTransaction,
};

export const transactionReducer = (transactionState: ITransactionsState = initialTransactionState, action: AnyAction) => {
  switch (action.type) {
    default:
      return transactionState;
  }
};
