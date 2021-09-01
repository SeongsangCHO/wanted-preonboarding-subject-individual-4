import React from "react";
import styled from "styled-components";

import Spinner from "components/common/Spinner";
import TodoItem from "components/TodoList/TodoItem";
import useTodoState from "hooks/useTodoState";
import useTodoFilter from "hooks/useTodoFilter";

interface IProps {
  searchText: string;
}

const TodoList: React.FC<IProps> = ({ searchText }) => {
  const { todoState } = useTodoState();
  const filteredList = useTodoFilter(searchText);
  console.log(todoState.status);

  return (
    <Container>
      <ItemWrapper>
        list
        {todoState.count > 0 && filteredList.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
        {todoState.status === "loading" && <Spinner />}
        {todoState.status === "success" && <div></div>}
      </ItemWrapper>
    </Container>
  );
};
export default React.memo(TodoList);

const Container = styled.section``;
const ItemWrapper = styled.ul``;
