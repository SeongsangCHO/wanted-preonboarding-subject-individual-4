import { newTodoGen } from "utils/backend/storage";
import { ITodo } from "types/todo";
import { getLocalStorage, setLocalStorage } from "utils/backend/storage";

const getIdFromUrl = (url: string): string => {
  const queryString = url.split("/");
  const id = queryString[queryString.length - 1];
  return id;
};

export const CREATE_TODO_ITEM = (url: string, reqData: { content: string; goalDate: string }) => {
  //클라이언트에서로부터 받은 content를 localStorage에 저장하고 응답을 반환하는 함수입니다.
  const newTodo = newTodoGen(reqData);
  try {
    const data = getLocalStorage("todos");
    data.count += 1;
    data.todoList = [...data.todoList, newTodo];
    setLocalStorage("todos", data);
  } catch (e) {
    console.error(e);
    return { msg: "Todo create ERROR", status: 500 };
  }
  return { msg: "Todo created", status: 200, data: newTodo };
};

export const DELETE_TODO_ITEM = (url: string) => {
  //클라이언트에서로부터 받은 queryString에서 id를 뽑아 해당하는 데이터를 삭제하고 응답을 반환하는 함수입니다.
  const id = getIdFromUrl(url);
  try {
    const data = getLocalStorage("todos");
    data.count -= 1;
    const updatedData = data.todoList.filter((item: ITodo) => item.id !== id);
    data.todoList = [...updatedData];
    setLocalStorage("todos", data);
  } catch (e) {
    console.error(e);
    return { msg: "Todo Delete ERROR", status: 500 };
  }
  return { msg: "Todo Deleted", status: 200 };
};

export const EDIT_TODO_ITEM = (url: string, reqData: { content: string }) => {
  //클라이언트에서로부터 받은 queryString에서 id를 뽑아 해당하는 데이터를 삭제하고 응답을 반환하는 함수입니다.
  const id = getIdFromUrl(url);
  try {
    const data = getLocalStorage("todos");
    const updatedData = data.todoList.map((item: ITodo) =>
      item.id === id
        ? {
            ...item,
            content: reqData.content,
          }
        : item,
    );
    data.todoList = [...updatedData];
    setLocalStorage("todos", data);
  } catch (e) {
    console.error(e);
    return { msg: "Todo Edit ERROR", status: 500 };
  }
  return { msg: "Todo Edited", status: 200, content: `${id} is Updated` };
};
