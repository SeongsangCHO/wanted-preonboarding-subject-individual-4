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
  SET_FILTER_TYPE,
  ADD_TODO_ITEM_FAILURE,
  CHECK_TODO_ITEM_FAILURE,
  DELETE_TODO_ITEM_FAILURE,
  EDIT_TODO_ITEM_FAILURE,
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

export const requestAddTodoItem = (data: { content: string; goalDate: string }) => {
  return {
    type: ADD_TODO_ITEM_REQUEST,
    payload: data,
  };
};

export const addTodoItem = (data: ITodo) => {
  return {
    type: ADD_TODO_ITEM_SUCCESS,
    data,
  };
};

export const failureAddTodoItem = () => {
  return {
    type: ADD_TODO_ITEM_FAILURE,
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

export const failureCheckTodo = () => {
  return {
    type: CHECK_TODO_ITEM_FAILURE,
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

export const failureDeleteTodoItem = () => {
  return {
    type: DELETE_TODO_ITEM_FAILURE,
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

export const failureEditTodoItem = () => {
  return {
    type: EDIT_TODO_ITEM_FAILURE,
  };
};

export const setFilterType = (filter: string) => {
  return {
    type: SET_FILTER_TYPE,
    filter,
  };
};

export type TodoAction =
  | ReturnType<typeof requestAddTodoItem>
  | ReturnType<typeof addTodoItem>
  | ReturnType<typeof failureAddTodoItem>
  | ReturnType<typeof requestGetTodosList>
  | ReturnType<typeof setTodosList>
  | ReturnType<typeof failureGetTodosList>
  | ReturnType<typeof requestCheckTodoItem>
  | ReturnType<typeof toggleCheckTodo>
  | ReturnType<typeof failureCheckTodo>
  | ReturnType<typeof requestDeleteTodoItem>
  | ReturnType<typeof deleteTodoItem>
  | ReturnType<typeof failureDeleteTodoItem>
  | ReturnType<typeof requestEditTodoItem>
  | ReturnType<typeof editTodoItem>
  | ReturnType<typeof failureEditTodoItem>
  | ReturnType<typeof setFilterType>;
