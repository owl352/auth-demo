export type User = {
  login: string;
  passHash: string;
  username: string;
  banned: boolean;
  //TODO: Implement history type
  history: Array<any>;
  //TODO: Implement ad type
  actualDeliveries: Array<any>;
  //TODO: Implement transactions type
  transactions: Array<any>;
  //TODO: Implement actual transactions type
  actualTransactions: Array<any>;
  role: number;
};
