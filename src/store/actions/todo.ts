import { ITodo, ITodoList } from "types/todo";
import {
  ADD_TODO_ITEM,
  GET_TODOS_LIST_REQUEST,
  GET_TODOS_LIST_SUCCESS,
  GET_TODOS_LIST_FAILURE,
} from "store/actions/types";

export const requestGetTodosList = () => {
  return {
    type: GET_TODOS_LIST_REQUEST,
  };
};

export const setTodosList = (todo: ITodoList) => {
  return {
    type: GET_TODOS_LIST_SUCCESS,
    data: todo,
  };
};

export const addTodoItem = (content: string) => {
  return {
    type: ADD_TODO_ITEM,
    payload: content,
  };
};

export type TodoAction =
  | ReturnType<typeof addTodoItem> //Post요청 {}객체하나 던지기
  | ReturnType<typeof requestGetTodosList>
  | ReturnType<typeof setTodosList>;
