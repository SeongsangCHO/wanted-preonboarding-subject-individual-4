import useModalState from "hooks/useModalState";
import React, { useState } from "react";
import { closeModal } from "store/actions/modal";
import Portal from "./Portal/Portal";
import styled from "styled-components";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import { ReactComponent as Calendar } from "assets/calendar.svg";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import useTodoState from "hooks/useTodoState";
import { requestGetTodosList } from "store/actions/todo";
import { useDispatch } from "react-redux";
registerLocale("ko", ko);
interface IProps {}

const TodoModal: React.FC<IProps> = ({}) => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const handleDate = (date: Date | null) => {
    console.log(date);
    setStartDate(date);
  };
  const {
    modalState: { showModal: showModal },
  } = useModalState();
  const { todoState } = useTodoState();
  console.log(todoState);

  if (!showModal) return <></>;
  return (
    <Portal>
      <TodoModalDim>
        <ModalContent>
          <GoalDateText>Goal: {startDate?.toDateString()}</GoalDateText>
          <TodoInput placeholder="Add a Task"></TodoInput>
          <Bottom>
            <label htmlFor="date-picker" tabIndex={0}>
              <Calendar />
            </label>
            <StyledDatePicker
              minDate={new Date()}
              locale="ko"
              id="date-picker"
              selected={startDate}
              onChange={handleDate}
              dateFormat="yyyy/MM/dd"
              className="date-picker"
              // placeholderText="Set Goal Date"
            />
            <ButtonContainer>
              <button onClick={() => dispatch(closeModal())}>cancel</button>
              <button onClick={() => dispatch(requestGetTodosList())}>Add Task</button>
            </ButtonContainer>
          </Bottom>
        </ModalContent>
      </TodoModalDim>
    </Portal>
  );
};
export default TodoModal;
const ButtonContainer = styled.div`
  & button + button {
    margin-left: 5px;
  }
`;
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
`;

const GoalDateText = styled.span`
  position: absolute;
  top: 3px;
  left: 15px;
`;

const StyledDatePicker = styled(DatePicker)`
  visibility: hidden;
`;

const ModalContent = styled.div`
  & label {
    width: 20px;
    height: 20px;
    /* position: relative; */
  }
  & label svg {
    top: 0;
    left: 0;
    /* position: absolute; */
    width: 20px;
    height: 20px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 720px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, 0);
  box-shadow: 1px 1px 6px 0px #000000;
  border-radius: 20px;
  background-color: white;
  padding: 0 15px;
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
