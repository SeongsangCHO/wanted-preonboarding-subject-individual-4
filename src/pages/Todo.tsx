import React, { useEffect, useRef, useState } from "react";
import TodoHeader from "components/TodoHeader";
import TodoProgressBar from "components/TodoProgressBar";
import TodoPageTemplate from "components/Template";
import TodoList from "components/TodoList/TodoList";
import TodoFilter from "components/TodoFilter";
import AAA from "components";
import TodoModal from "components/TodoModal";
import { useDispatch } from "react-redux";
import { requestGetTodosList } from "store/actions/todo";
import { getTodosList, getTodoById } from "api/todo";

interface IProps {}

const TodoListPage: React.FC<IProps> = ({}) => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getTodosList());
  // }, []);
  const dispatch = useDispatch();
  useEffect(() => {
    getTodosList();
    getTodoById(1);
    dispatch(requestGetTodosList());

    // if (todoState.count === 0) {
    //로컬에서 꺼내와서 이것도 비동기요청해야함 전역으로 저장하기
    //로컬에 아예없는 상태면 ?
  }, []);
  return (
    <TodoPageTemplate>
      <AAA />
      <TodoHeader />
      <TodoFilter />
      <TodoProgressBar />
      <TodoList />
      <TodoModal />
    </TodoPageTemplate>
  );
};
export default TodoListPage;
