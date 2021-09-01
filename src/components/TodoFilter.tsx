import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import CommonButton from "components/common/Button";
import useTodoState from "hooks/useTodoState";
import { setFilterType } from "store/actions/todo";

const TodoFilter: React.FC = () => {
  const dispatch = useDispatch();
  const {
    todoState: { filter, count, todoList },
  } = useTodoState();

  const handleFilter = (e: React.MouseEvent<HTMLDivElement>) => {
    //클릭된 타입에 따라 필터타입을 전역스테이트에 갱신하기 위한 트리거
    const {
      dataset: { type },
    } = e.target as HTMLDivElement;
    if (!type) return;
    dispatch(setFilterType(type));
  };

  const getCheckedTodoCount = (): number => {
    //체크된 todo 갯수 세는 함수
    return todoList.filter((item) => item.isCheck === false).length;
  };

  const todoCount = getCheckedTodoCount();

  return (
    <Container onClick={handleFilter}>
      <AllItemFilter className={filter === "All" ? "focus" : ""} data-type="All">
        All {count}
      </AllItemFilter>
      <TodoItemFilter className={filter === "Todo" ? "focus" : ""} data-type="Todo">
        Todo {todoCount}
      </TodoItemFilter>
      <DoneItemFilter className={filter === "Done" ? "focus" : ""} data-type="Done">
        Done {count - todoCount}
      </DoneItemFilter>
    </Container>
  );
};
export default React.memo(TodoFilter);

const Container = styled.div`
  display: flex;
  margin-top: 24px;
  & button {
    width: 60px;
    height: 30px;
  }
  & button + button {
    margin-left: 10px;
  }
`;
const AllItemFilter = styled(CommonButton)`
  background-color: white;
  &.focus {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;
const TodoItemFilter = styled(CommonButton)`
  background-color: white;

  &.focus {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;
const DoneItemFilter = styled(CommonButton)`
  background-color: white;
  &.focus {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;
