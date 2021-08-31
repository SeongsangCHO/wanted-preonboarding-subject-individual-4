import useTodoState from "hooks/useTodoState";
import React from "react";
import styled from "styled-components";
import TodoItem from "components/TodoList/TodoItem";
import CommonButton from "components/common/Button";
interface IProps {}

const TodoList: React.FC<IProps> = ({}) => {
  const { todoState } = useTodoState();

  return (
    <Container>
      <ItemWrapper>
        list
        {todoState.count > 0 &&
          todoState.todoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
        {todoState.status === "loading" && <div>Loading</div>}
        {todoState.status === "success" && <div>succes</div>}
      </ItemWrapper>
    </Container>
  );
};
export default TodoList;

const Container = styled.section``;
const ItemWrapper = styled.ul``;
