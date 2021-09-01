import React, { useEffect, useState } from "react";
import useTodoState from "./useTodoState";

interface IProps {}

const useTodoFilter = () => {
  const { todoState } = useTodoState();
  const [filteredList, setFilteredList] = useState([...todoState.todoList]);

  useEffect(() => {
    if (todoState.filter === "All") {
      setFilteredList([...todoState.todoList]);
    } else if (todoState.filter === "Done") {
      setFilteredList([...todoState.todoList.filter((item) => item.isCheck === true)]);
    } else if (todoState.filter === "Todo") {
      setFilteredList([...todoState.todoList.filter((item) => item.isCheck === false)]);
    }
  }, [todoState]);
  return filteredList;
};
export default useTodoFilter;
