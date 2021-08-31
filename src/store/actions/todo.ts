import { ITodo, ITodoList } from "types/todo";
import {
  CHECK_TODO_ITEM_REQUEST,
  ADD_TODO_ITEM_REQUEST,
  ADD_TODO_ITEM_SUCCESS,
  GET_TODOS_LIST_REQUEST,
  GET_TODOS_LIST_SUCCESS,
  GET_TODOS_LIST_FAILURE,
  CHECK_TODO_ITEM_SUCCESS,
  DELETE_TODO_ITEM_REQUEST,
  DELETE_TODO_ITEM_SUCCESS,
  EDIT_TODO_ITEM_REQUEST,
  EDIT_TODO_ITEM_SUCCESS,
} from "store/actions/types";

export const requestGetTodosList = () => {
  return {
    type: GET_TODOS_LIST_REQUEST,
  };
};

export const setTodosList = (todo: ITodoList) => {
  return {
    type: GET_TODOS_LIST_SUCCESS,
    todo,
  };
};

export const failureGetTodosList = () => {
  return {
    type: GET_TODOS_LIST_FAILURE,
  };
};

export const requestAddTodoItem = (content: string) => {
  return {
    type: ADD_TODO_ITEM_REQUEST,
    content,
  };
};

export const addTodoItem = (data: ITodo) => {
  return {
    type: ADD_TODO_ITEM_SUCCESS,
    data,
  };
};

export const requestCheckTodoItem = (id: string) => {
  return {
    type: CHECK_TODO_ITEM_REQUEST,
    id,
  };
};

export const toggleCheckTodo = (id: string) => {
  return {
    type: CHECK_TODO_ITEM_SUCCESS,
    id,
  };
};

export const requestDeleteTodoItem = (id: string) => {
  return {
    type: DELETE_TODO_ITEM_REQUEST,
    id,
  };
};

export const deleteTodoItem = (id: string) => {
  return {
    type: DELETE_TODO_ITEM_SUCCESS,
    id,
  };
};

export const requestEditTodoItem = (data: { id: string; content: string }) => {
  return {
    type: EDIT_TODO_ITEM_REQUEST,
    payload: data,
  };
};

export const editTodoItem = (data: { id: string; content: string }) => {
  return {
    type: EDIT_TODO_ITEM_SUCCESS,
    payload: data,
  };
};

export type TodoAction =
  | ReturnType<typeof requestAddTodoItem> //Post요청 {}객체하나 던지기
  | ReturnType<typeof setTodosList>
  | ReturnType<typeof failureGetTodosList>
  | ReturnType<typeof requestGetTodosList>
  | ReturnType<typeof toggleCheckTodo>
  | ReturnType<typeof requestCheckTodoItem>
  | ReturnType<typeof requestDeleteTodoItem>
  | ReturnType<typeof deleteTodoItem>
  | ReturnType<typeof requestEditTodoItem>
  | ReturnType<typeof editTodoItem>
  | ReturnType<typeof addTodoItem>; //Post요청 {}객체하나 던지기
