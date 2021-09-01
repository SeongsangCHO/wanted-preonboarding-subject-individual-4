import React from "react";
import styled from "styled-components";

import useTodoState from "hooks/useTodoState";
import { useEffect } from "react";
import { Shadow } from "styles/mixin";

interface IProps {}

const TodoProgressBar: React.FC<IProps> = ({}) => {
  const {
    todoState: { count, todoList },
  } = useTodoState();
  const getCheckedDoneCount = (): number => {
    return todoList.filter((item) => item.isCheck === true).length;
  };
  const todoCount = getCheckedDoneCount();
  const getProgressPercent = (): number => {
    return Math.floor((todoCount / count) * 100);
  };
  const progressPercent = getProgressPercent();

  const percentTextPhrases = () => {
    if (isNaN(progressPercent)) {
      return "";
    }
    if (progressPercent === 100) {
      return "👏 Congrats Go take a nap!";
    }
    if (progressPercent >= 75) {
      return "🤩 Almost done!";
    }
    if (progressPercent >= 50) {
      return "💪 You did half of tasks!";
    }
    if (progressPercent === 0) {
      return "👊 Do Something !";
    }
    if (progressPercent > 0) {
      return "😄 Good keep going !";
    }
  };

  useEffect(() => {
    getProgressPercent();
  }, [todoList]);
  return (
    <Container>
      <TotalBar>
        <CompletedBar progressPercent={progressPercent}>&nbsp;</CompletedBar>
      </TotalBar>
      <PercentText>{percentTextPhrases()}</PercentText>
    </Container>
  );
};
export default TodoProgressBar;

const PercentText = styled.span`
  display: inline-block;
  width: 100%;
  text-align: center;
  margin-top: 15px;
`;

const CompletedBar = styled.span<{ progressPercent: number }>`
  transition: 1s;
  display: inline-block;
  border-radius: 11px;
  width: ${(props) => props.progressPercent}%;
  background-color: ${({ theme }) => theme.colors.green};
`;

const TotalBar = styled.div`
  width: 100%;
  background-color: beige;
  border-radius: 11px;
  ${Shadow}
`;

const Container = styled.div`
  margin-top: 15px;
`;
