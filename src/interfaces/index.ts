export enum FilterType {
  all = "view all todos",
  completed = "completed",
  incomplete = "incomplete"
}

export interface ITodo {
  _id: string;
  completed: boolean;
  userName: string;
  data: string;
}
