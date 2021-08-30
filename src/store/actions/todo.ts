import { ITodo } from "types/todo";
import { 데이터_삽입, 데이터조회요청 } from "store/actions/types";

export const requestTodosData = () => {
  return {
    type: 데이터조회요청,
  };
};

export const addTodoItem = (data: ITodo) => {
  return {
    type: 데이터_삽입,
    payload: data,
  };
};

export type TodoAction =
  | ReturnType<typeof addTodoItem> //Post요청 {}객체하나 던지기
  | ReturnType<typeof requestTodosData>;
