import useTodoState from "hooks/useTodoState";
import React, { useState } from "react";
import styled from "styled-components";
import TodoItem from "components/TodoList/TodoItem";
import { useEffect } from "react";
import useTodoFilter from "hooks/useTodoFilter";
interface IProps {}

const TodoList: React.FC<IProps> = ({}) => {
  const { todoState } = useTodoState();
  const filteredList = useTodoFilter();

  return (
    <Container>
      <ItemWrapper>
        list
        {todoState.count > 0 && filteredList.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
        {todoState.status === "loading" && <div>Loading</div>}
        {todoState.status === "success" && <div>succes</div>}
      </ItemWrapper>
    </Container>
  );
};
export default TodoList;

const Container = styled.section``;
const ItemWrapper = styled.ul``;
