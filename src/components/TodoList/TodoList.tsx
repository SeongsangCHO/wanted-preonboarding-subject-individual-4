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

  return (
    <Container>
      <ItemWrapper>
        {todoState.count > 0 && filteredList.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
        {todoState.status === "loading" && <Spinner />}
        {todoState.count === 0 && <NoDataText>✅ Add your Task ✅ </NoDataText>}
      </ItemWrapper>
    </Container>
  );
};
export default React.memo(TodoList);

const Container = styled.section``;
const ItemWrapper = styled.ul``;

const NoDataText = styled.span`
  display: inline-block;
  width: 100%;
  text-align: center;
`;
