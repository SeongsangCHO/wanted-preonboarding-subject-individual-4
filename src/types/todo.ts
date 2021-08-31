import { TodoAction } from "store/actions/todo";

export interface ITodoRequestStatus {
  loading: boolean;
  success: boolean;
  failure: boolean;
}

export interface ITodoList {
  count: number;
  todoList: ITodo[];
  status: ITodoRequestStatus;
}

export interface ITodo {
  id: string;
  content: string;
  isCheck: boolean;
  createdAt: Date;
}
