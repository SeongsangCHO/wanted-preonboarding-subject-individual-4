import { ITodo, ITodoList } from "types/todo";
import * as POST from "utils/backend/post";
import * as GET from "utils/backend/get";
//axios,fetch대신 비동기요청을 POST.*, GET.*라는 명칭의 함수로 작성했습니다.
//localStorage가 db역할을 하도록 작성했습니다.

//실제 비동기요청함수처럼 작성하기위해 URL, END_POINT를 파라미터로 넘겨주나 해당 프로그램에선 의미 없습니다.
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
  //check클릭했을때 id를 서버로 전달하는 함수입니다.
  const res = GET.UPDATE_TODO_ITEM_CHECK(`${BASE_URL}/${END_POINT.todo}/${id}`);
  return res;
};
export const createTodoItem = (data: { content: string; goalDate: string }): IResponse => {
  //backend로 content데이터를 저장하기 위해 요청하는 함수입니다.
  const res = POST.CREATE_TODO_ITEM(`${BASE_URL}/${END_POINT.todo}`, data);
  return res;
};

export const deleteTodoItem = (id: string): IResponse => {
  //삭제 클릭했을 때 id를 서버로 전달하는 함수입니다.
  const res = POST.DELETE_TODO_ITEM(`${BASE_URL}/${END_POINT.todo}/${id}`);
  return res;
};

export const editTodoItem = (payload: { id: string; content: string }): IResponse => {
  //수정시 id와 수정된 text를 서버로 전달하는 함수입니다.
  const { id, content } = payload;
  const res = POST.EDIT_TODO_ITEM(`${BASE_URL}/${END_POINT.todo}/${id}`, { content });
  return res;
};
