import useModalState from "hooks/useModalState";
import React from "react";
import { useDispatch } from "react-redux";
import { showModal } from "store/actions/modal";
import CommonButton from "components/common/Button";
import styled from "styled-components";
import { ReactComponent as AddIcon } from "assets/add.svg";
import { ReactComponent as SearchIcon } from "assets/search.svg";
import { Shadow } from "styles/mixin";

interface IProps {}

const TodoHeader: React.FC<IProps> = ({}) => {
  const dispatch = useDispatch();

  return (
    <Header>
      <label htmlFor="search-input">
        <SearchIcon aria-label="search icon" />
      </label>
      <SearchInput id="search-input" type="text" placeholder="Find your task"></SearchInput>
      <TodoCreateModal onClick={() => dispatch(showModal())}>
        <AddIcon aria-label="todo creator icon" />
      </TodoCreateModal>
    </Header>
  );
};
export default TodoHeader;

const Header = styled.header`
  display: flex;
  justify-content: space-around;
  position: relative;
  & > label {
    position: absolute;
    width: 20px;
    left: 20px;
    top: 16px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 50px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  padding-left: 40px;
  ${Shadow};
  &:focus-visible {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

const TodoCreateModal = styled(CommonButton)`
  width: 50px;
  margin-left: 20px;
  color: white;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary};
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;
