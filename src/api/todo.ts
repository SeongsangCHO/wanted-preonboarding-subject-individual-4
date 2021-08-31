import { ITodo, ITodoList } from "types/todo";
import * as POST from "utils/backend/post";
import * as GET from "utils/backend/get";
//axios,fetch대신 비동기요청을 POST.*, GET.*라는 명칭의 함수로 작성했습니다.

export const BASE_URL = "www.paywork-todolist.io";
export const END_POINT = {
  todo: "todo",
};

export interface IResponse {
  msg: string;
  status: number;
  data?: ITodo;
  content?: string;
}

export const getTodoList = (): ITodoList | null => {
  //backend로 todoList데이터를 받아오기 위해 요청하는 함수입니다.
  const res = GET.SELECT_TODO_LIST(`${BASE_URL}/${END_POINT.todo}`);
  return res;
};
export const checkTodoItem = (id: string): IResponse => {
  const res = GET.UPDATE_TODO_ITEM_CHECK(`${BASE_URL}/${END_POINT.todo}/${id}`);
  return res;
};
export const createTodoItem = (content: string): IResponse => {
  //backend로 content데이터를 저장하기 위해 요청하는 함수입니다.
  const res = POST.CREATE_TODO_ITEM(`${BASE_URL}/${END_POINT.todo}`, { content });
  return res;
};

// export const updateTodoItem = (id: string, content: string): IResponse => {
//   const res = POST.UPDATE_TODO_ITEM(`${BASE_URL}/${END_POINT.todo}/${id}`, { content });
//   return res;
// };

export const deleteTodoItem = (id: string): IResponse => {
  const res = POST.DELETE_TODO_ITEM(`${BASE_URL}/${END_POINT.todo}/${id}`);
  return res;
};

export const editTodoItem = (payload: { id: string; content: string }): IResponse => {
  const { id, content } = payload;
  const res = POST.EDIT_TODO_ITEM(`${BASE_URL}/${END_POINT.todo}/${id}`, { content });
  return res;
};
