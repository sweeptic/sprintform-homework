interface IBase {
  id: string | undefined;
}

export interface ITransactions extends IBase {
  summary: string;
  category: Array<TCategory>;
  sum: number;
  currency: string;
  paid: string;
}

type TCategory =
  | "housing"
  | "travel"
  | "food"
  | "utilities"
  | "insurance"
  | "healthcare"
  | "financial"
  | "lifestyle"
  | "entertainment"
  | "miscellaneous";
