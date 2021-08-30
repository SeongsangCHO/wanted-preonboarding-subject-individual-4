import useModalState from "hooks/useModalState";
import React, { useState } from "react";
import { closeModal } from "store/actions/modal";
import Portal from "./Portal/Portal";
import styled from "styled-components";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
registerLocale("ko", ko);
interface IProps {}

const TodoModal: React.FC<IProps> = ({}) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const handleDate = (date: Date | null) => {
    console.log(date);
    setStartDate(date);
  };
  const {
    modalState: { showModal: showModal },
    dispatch,
  } = useModalState();
  if (!showModal) return <></>;
  return (
    <Portal>
      <TodoModalDim>
        <Section>
          <input placeholder="Add a task"></input>
          <label htmlFor="date-picker">아이콘넣어서 클릭되면 색칠하기, 스테이트넣어서.</label>
          <DatePicker
            minDate={new Date()}
            locale="ko"
            id="date-picker"
            selected={startDate}
            onChange={handleDate}
            dateFormat="yyyy/MM/dd"
            // placeholderText="Set Goal Date"
          />
          <button onClick={() => dispatch(closeModal())}>cancel</button>
          <button>Add Task</button>
        </Section>
      </TodoModalDim>
    </Portal>
  );
};
export default TodoModal;

const Section = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 720px;
  height: 60px;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, 0);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 5px 4px 4px rgba(0, 0, 0, 0.25);
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
  background-color: rgba(0, 0, 0, 0.3);
`;
