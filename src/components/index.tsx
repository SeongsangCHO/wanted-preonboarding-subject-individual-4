import useModalState from "hooks/useModalState";
import useTodoState from "hooks/useTodoState";
import React from "react";

interface IProps {}

const AAA: React.FC<IProps> = ({}) => {
  const { todoState, dispatch } = useTodoState();
  const { modalState, dispatch: mDispatch } = useModalState();
  console.log(todoState, modalState);

  return <div></div>;
};
export default AAA;
