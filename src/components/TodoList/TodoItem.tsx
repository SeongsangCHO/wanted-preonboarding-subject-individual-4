import React, { useEffect, useRef } from "react";
import { ITodo } from "types/todo";
import styled, { css } from "styled-components";
import { useDispatch } from "react-redux";
import {
  requestCheckTodoItem,
  requestDeleteTodoItem,
  requestEditTodoItem,
} from "store/actions/todo";
import { useState } from "react";
import { ReactComponent as CheckIcon } from "assets/Check.svg";
import { ReactComponent as DeleteIcon } from "assets/Trash.svg";
import { ReactComponent as EditIcon } from "assets/Edit.svg";
import { ReactComponent as EditDoneIcon } from "assets/Editdone.svg";
import { Shadow } from "styles/mixin";

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
  const editRequest = () => {
    if (isEdit && todoTextRef.current) {
      dispatch(requestEditTodoItem({ id: todo.id, content: todoTextRef.current?.innerText }));
    }
  };
  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsEdit((prev) => !prev);
    editRequest();
  };
  const handleEditDone = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === "Enter") {
      setIsEdit(false);
      editRequest();
    }
  };
  return (
    <Container>
      <LeftSide>
        <CheckButton onClick={() => dispatch(requestCheckTodoItem(todo.id))}>
          {todo.isCheck && <CheckIcon />}
        </CheckButton>
        <TodoText
          isCheck={todo.isCheck}
          contentEditable={isEdit}
          suppressContentEditableWarning={true}
          ref={todoTextRef}
          onKeyDown={handleEditDone}
        >
          {todo.content}
        </TodoText>
      </LeftSide>
      <RightSide>
        <EditButton onClick={handleEdit}>
          {isEdit ? <EditDoneIcon className="edit-done" /> : <EditIcon className="edit" />}
        </EditButton>
        <DeleteButton onClick={() => dispatch(requestDeleteTodoItem(todo.id))}>
          <DeleteIcon className="delete" />
        </DeleteButton>
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
  height: 60px;
  border-bottom: 1px solid #827a7a;
`;
const CheckButton = styled.button`
  ${Shadow}
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  & svg {
    width: 25px;
    height: 20px;
  }
`;

const EditButton = styled.button`
  width: 25px;
  border: none;
  background-color: white;
  margin-right: 24px;

  & svg.edit {
    width: 30px;
    height: 30px;
  }
  & svg.edit-done {
    width: 28px;
    height: 28px;
  }
`;
const LeftSide = styled.div`
  display: flex;
  justify-content: center;
`;
const TodoText = styled.span<{ isCheck: boolean }>`
  width: 100%;
  line-height: 40px;
  margin-left: 10px;
  font-size: 24px;
  &:focus-visible {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
  ${(props) =>
    props.isCheck &&
    css`
      text-decoration-line: line-through;
      color: ${({ theme }) => theme.colors.gray};
    `}
`;
const RightSide = styled.div`
  height: 100%;
  padding-top: 10px;
`;

const DeleteButton = styled.button`
  border: none;
  background-color: white;
  & svg.delete {
    width: 32px;
    height: 32px;
  }
`;
