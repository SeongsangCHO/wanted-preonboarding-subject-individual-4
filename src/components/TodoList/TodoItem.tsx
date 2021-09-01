import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { useDispatch } from "react-redux";

import useTodoEdit from "hooks/useTodoEdit";
import Notification from "components/common/Notification";
import { requestCheckTodoItem, requestDeleteTodoItem } from "store/actions/todo";
import { ITodo } from "types/todo";
import { dateToDday } from "utils/date";
import { Shadow } from "styles/mixin";
import { ReactComponent as CheckIcon } from "assets/check.svg";
import { ReactComponent as DeleteIcon } from "assets/trash.svg";
import { ReactComponent as EditIcon } from "assets/edit.svg";
import { ReactComponent as EditDoneIcon } from "assets/editdone.svg";
import useTodoState from "hooks/useTodoState";
import Spinner from "components/common/Spinner";

interface IProps {
  todo: ITodo;
}

const TodoItem: React.FC<IProps> = ({ todo }) => {
  const { isEdit, editText, todoTextRef, handleEdit, maxCharactersCheck, handleEditKey } =
    useTodoEdit(todo);

  const dispatch = useDispatch();
  const dDay = dateToDday(todo.goalDate?.toLocaleString()!);
  useEffect(() => {
    if (todoTextRef.current) {
      todoTextRef.current.focus();
    }
  }, [isEdit]);
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
          onKeyUp={handleEditKey}
          isMaxLength={!maxCharactersCheck()}
        >
          {editText}
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
      <Notification className={!maxCharactersCheck() ? "input-max-length" : ""}>
        Max 50 characters
      </Notification>
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
  font-size: 20px;
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;
const CheckButton = styled.button<{ isCheck: boolean; isEdit: boolean }>`
  visibility: ${(props) => (props.isEdit ? "hidden" : "")};
  cursor: pointer;
  background-color: white;
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
  cursor: pointer;
  border: none;
  background-color: white;
  & svg.edit {
    width: 1.5em;
    height: 1.5em;
    &:hover path {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
  & svg.edit-done {
    width: 1.5em;
    height: 1.5em;
  }
`;
const LeftSide = styled.div`
  display: flex;
  justify-content: center;
`;
const TodoText = styled.span<{ isCheck: boolean; isMaxLength: boolean }>`
  width: 100%;
  max-width: 400px;
  line-height: 40px;
  margin-left: 10px;
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
  ${(props) =>
    props.isMaxLength &&
    css`
      color: red;
    `}

  font-size: 1em;
  @media screen and (max-width: 767px) {
    max-width: 100px;
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
  font-size: 1em;
  margin-right: 15px;
`;
const DeleteButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: white;
  & svg.delete {
    width: 1.5em;
    height: 1.5em;
    &:hover path {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`;
