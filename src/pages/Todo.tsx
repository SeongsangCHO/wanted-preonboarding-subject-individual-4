import TodoHeader from "components/TodoHeader";
import TodoProgressBar from "components/TodoProgressBar";
import TodoPageTemplate from "components/Template";
import TodoList from "components/TodoList/TodoList";
import TodoFilter from "components/TodoFilter";
import React from "react";
import AAA from "components";
import TodoModal from "components/TodoModal";

interface IProps {}

const TodoListPage: React.FC<IProps> = ({}) => {
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
