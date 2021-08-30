import { Action } from "store/actions/todo";

export interface ITodoList {
  count: number;
  todoList: ITodo[];
}

export interface ITodo {
  id: string;
  content: string;
  isCheck: boolean;
  createdAt: Date;
}

