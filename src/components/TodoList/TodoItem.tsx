import React from "react";
import { ITodo } from "types/todo";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { requestCheckTodoItem, requestDeleteTodoItem } from "store/actions/todo";

interface IProps {
  todo: ITodo;
}

const TodoItem: React.FC<IProps> = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <LeftSide>
        <button onClick={() => dispatch(requestCheckTodoItem(todo.id))}>체크박스</button>
        {todo.content}
      </LeftSide>
      <RightSide>
        <button>수정버튼</button>
        <button onClick={() => dispatch(requestDeleteTodoItem(todo.id))}>삭제버튼버튼</button>
      </RightSide>
    </Container>
  );
};
export default TodoItem;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #827a7a;
`;
const LeftSide = styled.div``;
const RightSide = styled.div``;
