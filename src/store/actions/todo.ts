import { ITodo } from "types/todo";

export type Action =
  | { type: "데이터조회요청"; } //get요청
  | { type: "데이터_삽입", payload: ITodo } //Post요청 {}객체하나 던지기
  