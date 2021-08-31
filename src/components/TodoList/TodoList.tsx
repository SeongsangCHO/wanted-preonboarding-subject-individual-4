import useTodoState from "hooks/useTodoState";
import React from "react";
import TodoItem from "./TodoItem";

interface IProps {}

const TodoList: React.FC<IProps> = ({}) => {
  const { todoState } = useTodoState();

  return (
    <div>
      list
      {todoState.count > 0 &&
        todoState.todoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      {todoState.status === "loading" && <div>Loading</div>}
      {todoState.status === "success" && <div>succes</div>}
    </div>
  );
};
export default TodoList;
