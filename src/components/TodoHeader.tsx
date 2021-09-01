import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import CommonButton from "components/common/Button";
import { showModal } from "store/actions/modal";
import { Shadow } from "styles/mixin";
import { ReactComponent as SearchIcon } from "assets/search.svg";
import { ReactComponent as AddIcon } from "assets/add.svg";
import useModalState from "hooks/useModalState";
import { useEffect } from "react";

interface IProps {
  searchText: string;
  setSearchText: (searchText: string) => void;
}

const TodoHeader: React.FC<IProps> = ({ searchText, setSearchText }) => {
  const dispatch = useDispatch();

  const { modalState } = useModalState();
  useEffect(() => {
    //모달 클릭시 기존 검색어 제거
    if (modalState.showModal) {
      handleSearchTextClear();
    }
  }, [modalState]);

  const handleSearchTextClear = (e?: React.MouseEvent<HTMLInputElement>) => {
    // Search Input 클릭시 초기화
    setSearchText("");
  };
  const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Search Input Update
    setSearchText(e.target.value);
  };
  return (
    <Header>
      <TodoCreateModal onClick={() => dispatch(showModal())}>
        <AddIcon aria-label="todo creator icon" />
      </TodoCreateModal>
      <label htmlFor="search-input">
        <SearchIcon aria-label="search icon" />
      </label>
      <SearchInput
        value={searchText}
        onClick={handleSearchTextClear}
        onChange={handleSearchText}
        id="search-input"
        type="text"
        placeholder="Find your task"
      ></SearchInput>
    </Header>
  );
};
export default React.memo(TodoHeader);

const Header = styled.header`
  display: flex;
  justify-content: space-around;
  position: relative;
  & > label {
    position: absolute;
    width: 20px;
    left: 90px;
    top: 15px;
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
  width: 65px;
  margin-right: 20px;
  color: white;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary};
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;
