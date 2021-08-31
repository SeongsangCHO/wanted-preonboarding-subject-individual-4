import React from "react";
import TodoHeader from "components/TodoHeader";
import TodoProgressBar from "components/TodoProgressBar";
import TodoPageTemplate from "components/Template";
import TodoList from "components/TodoList/TodoList";
import TodoFilter from "components/TodoFilter";
import TodoModal from "components/TodoModal";
import useInitLocalStorage from "hooks/useInitLocalStorage";

interface IProps {}

const TodoListPage: React.FC<IProps> = ({}) => {
  useInitLocalStorage();
  return (
    <TodoPageTemplate>
      <TodoHeader />
      <TodoFilter />
      <TodoProgressBar />
      <TodoList />
      <TodoModal />
    </TodoPageTemplate>
  );
};
export default TodoListPage;
