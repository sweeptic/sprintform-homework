interface IBaseEntitiy {
  id: string | null;
}

export interface ITransaction extends IBaseEntitiy {
  summary: string;
  category: TCategory;
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
