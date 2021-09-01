import React, { useState } from "react";
import moment from "moment";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { useDispatch } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";

import Portal from "components/Portal/Portal";
import CommonButton from "components/common/Button";
import useModalState from "hooks/useModalState";
import { closeModal } from "store/actions/modal";
import { requestAddTodoItem } from "store/actions/todo";
import { Shadow } from "styles/mixin";
import { ReactComponent as Calendar } from "assets/calendar.svg";
import Notification from "./common/Notification";

interface IProps {}

const TodoModal: React.FC<IProps> = ({}) => {
  const dispatch = useDispatch();
  const [goalDate, setGoalDate] = useState<Date>(moment().toDate());
  const [taskText, setTaskText] = useState("");
  const handleDate = (date: Date) => {
    //목표일을 설정하는 함수
    setGoalDate(date);
  };
  const {
    modalState: { showModal: showModal },
  } = useModalState();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    //Todo Text를 입력하는 함수
    const { value } = e.target;

    setTaskText(value);
  };
  const handleSumbit = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (taskText.length >= 50) {
      return;
    }
    //입력된 Todo Text LocalStorage에 넣기 위한 트리거
    dispatch(requestAddTodoItem({ content: taskText, goalDate: moment(goalDate).toISOString() }));
    dispatch(closeModal());
    setTaskText("");
    setGoalDate(moment().toDate());
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && taskText.length < 50) {
      handleSumbit();
    }
    if (e.key === "Escape") {
      dispatch(closeModal());
    }
  };
  const handleDimClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const {
      dataset: { type },
    } = e.target as HTMLDivElement;
    if (type === "modal-dim") {
      dispatch(closeModal());
    }
  };
  if (!showModal) return <></>;
  return (
    <Portal>
      <TodoModalDim data-type="modal-dim" onClick={handleDimClick}>
        <Notification className={taskText.length === 50 ? "input-max-length" : ""}>
          Max 50 characters
        </Notification>
        <ModalContent>
          <label htmlFor="date-picker" tabIndex={0}>
            <GoalDateText>To {moment(goalDate).format("yyyy/MM/DD")}</GoalDateText>
          </label>
          <TodoInput
            maxLength={50}
            placeholder="Add a Task"
            value={taskText}
            className={taskText.length === 50 ? "input-max-length" : ""}
            onChange={handleInput}
            onKeyUp={handleEnter}
            autoFocus
          ></TodoInput>
          <Bottom>
            <label htmlFor="date-picker" tabIndex={0}>
              <Calendar />
            </label>
            <StyledDatePicker
              popperPlacement="left-end"
              minDate={moment().toDate()}
              id="date-picker"
              selected={goalDate}
              onChange={handleDate}
              dateFormat="yyyy/MM/dd"
              className="date-picker"
            />
            <ButtonContainer>
              <CloseButton onClick={() => dispatch(closeModal())}>Cancel</CloseButton>
              <AddTaskButton onClick={handleSumbit}>Add Task</AddTaskButton>
            </ButtonContainer>
          </Bottom>
        </ModalContent>
      </TodoModalDim>
    </Portal>
  );
};
export default React.memo(TodoModal);
const CloseButton = styled(CommonButton)`
  width: 70px;
  height: 28px;
  background-color: white;
`;
const AddTaskButton = styled(CommonButton)`
  width: 70px;
  height: 28px;
  margin-left: 12px;
  color: white;
  background-color: ${({ theme }) => theme.colors.primary};
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

const ButtonContainer = styled.div``;
const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;
const TodoInput = styled.input`
  display: block;
  width: 100%;
  height: 30px;
  margin-top: 25px;
  border: none;
  border-radius: 11px;
  padding-left: 10px;
  ${Shadow}
  &:focus-visible {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
  &.input-max-length {
    border: 2px solid red;
  }
`;

const GoalDateText = styled.span`
  line-height: 34px;
  height: 30px;
  padding: 0 10px;
  position: absolute;
  left: 20px;
  top: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 11px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

const StyledDatePicker = styled(DatePicker)`
  visibility: hidden;
`;

const ModalContent = styled.div`
  & label svg {
    top: 0;
    left: 0;
    width: 28px;
    height: 28px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 720px;
  padding: 20px;
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, 0);
  ${Shadow};
  border-radius: 20px;
  background-color: white;
`;
const TodoModalDim = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  overflow-y: hidden;
  background-color: rgba(255, 255, 255, 0.7);
`;

// const Notification = styled.div`
//   opacity: 0;
//   position: absolute;
//   left: 50%;
//   top: 10%;
//   transition: 1s;
//   &.input-max-length {
//     opacity: 1;
//     top: 15%;
//   }
//   transform: translate(-50%, 0);
// `;
