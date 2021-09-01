import useModalState from "hooks/useModalState";
import React, { ChangeEvent, useState } from "react";
import { closeModal } from "store/actions/modal";
import Portal from "./Portal/Portal";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { ReactComponent as Calendar } from "assets/calendar.svg";
import "react-datepicker/dist/react-datepicker.css";
import { requestAddTodoItem } from "store/actions/todo";
import { useDispatch } from "react-redux";
import { Shadow } from "styles/mixin";
import CommonButton from "components/common/Button";
import moment from "moment";

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

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    //Todo Text를 입력하는 함수
    const { value } = e.target;
    setTaskText(value);
  };
  const handleSumbit = (e: React.MouseEvent<HTMLButtonElement>) => {
    //입력된 Todo Text LocalStorage에 넣기 위한 트리거
    dispatch(requestAddTodoItem({ content: taskText, goalDate: moment(goalDate).toISOString() }));
    dispatch(closeModal());
    setTaskText("");
    setGoalDate(moment().toDate());
  };
  if (!showModal) return <></>;
  return (
    <Portal>
      <TodoModalDim>
        <Notification className={taskText.length === 50 ? "input-max-length" : ""}>
          Max 50 characters
        </Notification>
        <ModalContent>
          <label htmlFor="date-picker" tabIndex={0}>
            <GoalDateText>To {moment(goalDate).format("yyyy/MM/DD")}</GoalDateText>
          </label>
          {/* <GoalDateText>To {moment(goalDate).format("yyyy/MM/DD")}</GoalDateText> */}
          <TodoInput
            maxLength={50}
            placeholder="Add a Task"
            value={taskText}
            className={taskText.length === 50 ? "input-max-length" : ""}
            onChange={handleInput}
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
  display: flex;
  width: 100%;
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
  /* height: 100px; */
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

const Notification = styled.div`
  opacity: 0;
  position: absolute;
  left: 50%;
  top: 10%;
  transition: 1s;
  &.input-max-length {
    opacity: 1;
    top: 15%;
  }
  transform: translate(-50%, 0);
`;
