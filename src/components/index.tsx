import useTodoState from "hooks/useTodoState";
import React from "react";

interface IProps {}

const AAA: React.FC<IProps> = ({}) => {
  const { todoState, dispatch } = useTodoState();
  console.log(todoState);

  return <div></div>;
};
export default AAA;
