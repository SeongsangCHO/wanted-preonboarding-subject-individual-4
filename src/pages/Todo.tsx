import React, { useState } from "react";

import TodoHeader from "components/TodoHeader";
import TodoProgressBar from "components/TodoProgressBar";
import TodoPageTemplate from "components/common/Template";
import TodoList from "components/TodoList/TodoList";
import TodoFilter from "components/TodoFilter";
import TodoModal from "components/TodoModal";
import useInitLocalStorage from "hooks/useInitLocalStorage";

const TodoListPage: React.FC = () => {
  useInitLocalStorage();
  const [searchText, setSearchText] = useState("");

  return (
    <TodoPageTemplate>
      <TodoHeader searchText={searchText} setSearchText={setSearchText} />
      <TodoFilter />
      <TodoProgressBar />
      <TodoList searchText={searchText} />
      <TodoModal />
    </TodoPageTemplate>
  );
};
export default TodoListPage;
