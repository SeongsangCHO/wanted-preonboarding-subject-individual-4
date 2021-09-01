export interface ITodoList {
  count: number;
  todoList: ITodo[];
  status?: string;
  filter?: string;
}

export interface ITodo {
  id: string;
  content: string;
  isCheck: boolean;
  createdAt: string;
  goalDate: string;
}
