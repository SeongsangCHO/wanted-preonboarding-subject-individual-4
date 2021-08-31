import { TodoAction } from "store/actions/todo";

export interface ITodoList {
  count: number;
  todoList: ITodo[];
  status?: string;
}

export interface ITodo {
  id: string;
  content: string;
  isCheck: boolean;
  createdAt: Date;
}
