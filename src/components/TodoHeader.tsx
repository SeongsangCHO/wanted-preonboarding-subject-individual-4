import useModalState from "hooks/useModalState";
import React from "react";
import { showModal } from "store/actions/modal";
import styled from "styled-components";

interface IProps {}

const TodoHeader: React.FC<IProps> = ({}) => {
  const { dispatch: modalDispatch } = useModalState();

  return (
    <Header>
      <button>Searchicon</button>
      <input placeholder="Find your task"></input>
      <button onClick={() => modalDispatch(showModal())}>modalOpener</button>
    </Header>
  );
};
export default TodoHeader;

const Header = styled.header``;
