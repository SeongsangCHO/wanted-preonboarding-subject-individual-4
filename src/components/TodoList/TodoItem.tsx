import React, { useEffect, useRef } from "react";
import { ITodo } from "types/todo";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { requestCheckTodoItem, requestDeleteTodoItem } from "store/actions/todo";
import { useState } from "react";

interface IProps {
  todo: ITodo;
}

const TodoItem: React.FC<IProps> = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const todoTextRef = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    if (todoTextRef.current) {
      todoTextRef.current.focus();
    }
  }, [isEdit]);
  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsEdit((prev) => !prev);
    if (isEdit) {
      //수정사항 반영 dispatch
    } else {
      // 아무일도 없음
    }
  };
  return (
    <Container>
      <LeftSide>
        <button onClick={() => dispatch(requestCheckTodoItem(todo.id))}>체크박스</button>
        <TodoText contentEditable={isEdit} suppressContentEditableWarning={true} ref={todoTextRef}>
          {todo.content}
        </TodoText>
      </LeftSide>
      <RightSide>
        <EditButton onClick={handleEdit}>{isEdit ? "완료버튼" : "수정버튼"}</EditButton>
        <button onClick={() => dispatch(requestDeleteTodoItem(todo.id))}>삭제버튼버튼</button>
      </RightSide>
    </Container>
  );
};
export default TodoItem;

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #827a7a;
`;
const EditButton = styled.button``;
const LeftSide = styled.div``;
const TodoText = styled.span``;
const RightSide = styled.div``;
