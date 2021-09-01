import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { useDispatch } from "react-redux";

import { ITodo } from "types/todo";
import { dateToDday } from "utils/date";
import {
  requestCheckTodoItem,
  requestDeleteTodoItem,
  requestEditTodoItem,
} from "store/actions/todo";
import { Shadow } from "styles/mixin";
import { ReactComponent as CheckIcon } from "assets/check.svg";
import { ReactComponent as DeleteIcon } from "assets/trash.svg";
import { ReactComponent as EditIcon } from "assets/edit.svg";
import { ReactComponent as EditDoneIcon } from "assets/editdone.svg";

interface IProps {
  todo: ITodo;
}

const TodoItem: React.FC<IProps> = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const todoTextRef = useRef<HTMLSpanElement | null>(null);
  const dDay = dateToDday(todo.goalDate?.toLocaleString()!);
  useEffect(() => {
    if (todoTextRef.current) {
      todoTextRef.current.focus();
    }
  }, [isEdit]);
  const editRequest = () => {
    //수정완료 클릭시 입력된 데이터를 LocalStorage에 반영하기 위한 트리거
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
        <CheckButton
          isEdit={isEdit}
          isCheck={todo.isCheck}
          onClick={() => dispatch(requestCheckTodoItem(todo.id))}
        >
          <CheckIcon className="check" />
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
        <DdayText>{dDay === 0 ? "Until Today" : `D-${dDay}`}</DdayText>
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
export default React.memo(TodoItem);

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #827a7a;
  padding-left: 5px;
`;
const CheckButton = styled.button<{ isCheck: boolean; isEdit: boolean }>`
  visibility: ${(props) => (props.isEdit ? "hidden" : "")};
  cursor: pointer;
  ${Shadow}
  min-width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  & .check {
    opacity: 0;
    width: 25px;
    height: 20px;
  }

  ${(props) =>
    props.isCheck
      ? css`
          & .check {
            opacity: 1;
          }
        `
      : css`
          &:hover {
            & .check {
              opacity: 0.6;
            }
          }
        `}
`;

const EditButton = styled.button`
  border: none;
  background-color: white;
  & svg.edit {
    width: 32px;
    height: 32px;
  }
  & svg.edit-done {
    width: 32px;
    height: 32px;
  }
`;
const LeftSide = styled.div`
  display: flex;
  justify-content: center;
`;
const TodoText = styled.span<{ isCheck: boolean }>`
  width: 100%;
  max-width: 400px;
  line-height: 40px;
  margin-left: 10px;
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
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
  @media screen and (max-width: 767px) {
    max-width: 220px;
  }
  @media screen and (min-width: 768px) {
    max-width: 480px;
  }
`;
const RightSide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
`;
const DdayText = styled.span`
  margin-right: 15px;
`;
const DeleteButton = styled.button`
  border: none;
  background-color: white;
  & svg.delete {
    width: 32px;
    height: 32px;
  }
`;
