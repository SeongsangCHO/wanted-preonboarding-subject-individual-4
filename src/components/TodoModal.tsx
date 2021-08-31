import useModalState from "hooks/useModalState";
import React, { ChangeEvent, useState } from "react";
import { closeModal } from "store/actions/modal";
import Portal from "./Portal/Portal";
import styled from "styled-components";
import DatePicker, { registerLocale } from "react-datepicker";
import { ReactComponent as Calendar } from "assets/calendar.svg";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import { requestAddTodoItem } from "store/actions/todo";
import { useDispatch } from "react-redux";
import { Shadow } from "styles/mixin";
import CommonButton from "components/common/Button";
import { createKRdate } from "utils/date";

registerLocale("ko", ko);
interface IProps {}

const TodoModal: React.FC<IProps> = ({}) => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState<Date | null>(createKRdate());
  const [taskText, setTaskText] = useState("");
  const handleDate = (date: Date | null) => {
    setStartDate(date);
    console.log(date);
  };
  const {
    modalState: { showModal: showModal },
  } = useModalState();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTaskText(value);
  };
  const handleSumbit = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(requestAddTodoItem(taskText));
    dispatch(closeModal());
    setTaskText("");
  };
  if (!showModal) return <></>;
  return (
    <Portal>
      <TodoModalDim>
        <ModalContent>
          <GoalDateText>Goal: {startDate?.toDateString()}</GoalDateText>
          <TodoInput placeholder="Add a Task" value={taskText} onChange={handleInput}></TodoInput>
          <Bottom>
            <label htmlFor="date-picker" tabIndex={0}>
              <Calendar />
            </label>
            <StyledDatePicker
              popperPlacement="left-end"
              // popperPlacement="auto"
              minDate={createKRdate()}
              locale="ko"
              id="date-picker"
              selected={startDate}
              onChange={handleDate}
              dateFormat="yyyy/MM/dd"
              className="date-picker"
              // placeholderText="Set Goal Date"
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
export default TodoModal;
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
`;

const GoalDateText = styled.span`
  position: absolute;
  top: 20px;
  left: 20px;
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
