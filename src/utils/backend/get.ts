import { ITodo, ITodoList } from "types/todo";
import { getLocalStorage, setLocalStorage } from "utils/backend/storage";

export const SELECT_TODO_LIST = (url: string): ITodoList | null => {
  const localItem = getLocalStorage("todos");
  if (localItem) {
    console.log("localItem", localItem);

    return localItem;
  }
  return null;
};

export const UPDATE_TODO_ITEM_CHECK = (url: string) => {
  const queryString = url.split("/");
  const id = queryString[queryString.length - 1];
  const data = getLocalStorage("todos");
  const updatedData = data.todoList.map((item: ITodo) =>
    item.id === id
      ? {
          ...item,
          isCheck: !item.isCheck,
        }
      : item,
  );
  data.todoList = [...updatedData];
  setLocalStorage("todos", data);
  return { msg: "Todo Check Toggled", status: 200 };
};
