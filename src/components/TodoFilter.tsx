import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFilterType } from "store/actions/todo";
import styled from "styled-components";
import CommonButton from "./common/Button";

interface IProps {}

const TodoFilter: React.FC<IProps> = ({}) => {
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  const handleFilter = (e: React.MouseEvent<HTMLDivElement>) => {
    const {
      dataset: { type },
    } = e.target as HTMLDivElement;
    if (!type) return;
    dispatch(setFilterType(type));
  };
  return (
    <Container onClick={handleFilter}>
      <AllItemFilter data-type="All">All</AllItemFilter>
      <TodoItemFilter data-type="Todo">Todo</TodoItemFilter>
      <DoneItemFilter data-type="Done">Done</DoneItemFilter>
    </Container>
  );
};
export default TodoFilter;

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
const AllItemFilter = styled(CommonButton)``;
const TodoItemFilter = styled(CommonButton)``;
const DoneItemFilter = styled(CommonButton)``;
