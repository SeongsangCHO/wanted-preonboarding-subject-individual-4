import { newTodoGen } from "store/reducers/todo";
import { ITodo } from "types/todo";
import { getLocalStorage, setLocalStorage } from "utils/backend/storage";

export const CREATE_TODO_ITEM = (url: string, reqData: { content: string }) => {
  //클라이언트에서로부터 받은 content를 localStorage에 저장하고 응답을 반환하는 함수입니다.
  const data = getLocalStorage("todos");
  data.count += 1;
  const newTodo = newTodoGen(reqData.content);
  data.todoList = [...data.todoList, newTodo];
  setLocalStorage("todos", data);
  return { msg: "Todo created", status: 200, data: newTodo };
};

export const UPDATE_TODO_ITEM = (url: string, reqData: { content: string }) => {
  //url끝에 붙은 id를 받아서 해당 id에 대해서 date update처리
  const queryString = url.split("/");
  const id = queryString[queryString.length - 1];
  console.log("updateTODO_ITEM", id);
  const data = getLocalStorage("todos");
  const updatedData = data.todoList.map((item: ITodo) =>
    item.id === id
      ? {
          ...item,
          content: reqData.content,
        }
      : item,
  );
  setLocalStorage("todos", updatedData);
  return { msg: `Todo Updated`, content: `${id} Item : Updated`, status: 200 };
};
