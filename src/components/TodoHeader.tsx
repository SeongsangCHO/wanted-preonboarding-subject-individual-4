import useModalState from "hooks/useModalState";
import React from "react";
import { useDispatch } from "react-redux";
import { showModal } from "store/actions/modal";
import styled from "styled-components";

interface IProps {}

const TodoHeader: React.FC<IProps> = ({}) => {
  const dispatch = useDispatch();

  return (
    <Header>
      <button>Searchicon</button>
      <input placeholder="Find your task"></input>
      <button onClick={() => dispatch(showModal())}>modalOpener</button>
    </Header>
  );
};
export default TodoHeader;

const Header = styled.header``;
