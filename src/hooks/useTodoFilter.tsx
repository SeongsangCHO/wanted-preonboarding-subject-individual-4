import React, { useEffect, useState } from "react";
import useTodoState from "hooks/useTodoState";

const useTodoFilter = (searchText: string) => {
  const { todoState } = useTodoState();
  const [filteredList, setFilteredList] = useState([...todoState.todoList]);

  useEffect(() => {
    if (todoState.filter === "All") {
      setFilteredList([...todoState.todoList].filter((item) => item.content.includes(searchText)));
    } else if (todoState.filter === "Done") {
      setFilteredList([
        ...todoState.todoList.filter(
          (item) => item.isCheck === true && item.content.includes(searchText),
        ),
      ]);
    } else if (todoState.filter === "Todo") {
      setFilteredList([
        ...todoState.todoList.filter(
          (item) => item.isCheck === false && item.content.includes(searchText),
        ),
      ]);
    }
  }, [todoState, searchText]);
  return filteredList;
};
export default useTodoFilter;
