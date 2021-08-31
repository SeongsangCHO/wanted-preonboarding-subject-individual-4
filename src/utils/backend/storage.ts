import { ITodo } from "types/todo";
import moment from "moment";

export const getLocalStorage = (key: string) => {
  // key에 해당하는 localStorage 데이터를 받아와 parsing 후 return
  const localItem = localStorage.getItem(key);
  if (localItem) {
    return JSON.parse(localItem);
  }
  return null;
};

export const setLocalStorage = (key: string, value: any): void => {
  //key : value로 localStorage에 데이터를 set
  //어느 데이터든 들어올 수 있기에 any타입을 사용
  localStorage.setItem(key, JSON.stringify(value));
};

const getLastId = (): string => {
  const data = getLocalStorage("todos");
  if (data && data.count !== 0) {
    return (parseInt(data.todoList[data.todoList.length - 1].id) + 1).toString();
  }
  return "1";
};

export const newTodoGen = (data: { content: string; goalDate: string }): ITodo => {
  //현재 UTC시각, data의 마지막 id값을 확인해서 새로운 데이터를 반환
  return {
    id: getLastId(),
    content: data.content,
    isCheck: false,
    createdAt: moment().format(),
    goalDate: data.goalDate,
  };
};
