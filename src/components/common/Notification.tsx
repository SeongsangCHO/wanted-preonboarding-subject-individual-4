import React from "react";
import styled from "styled-components";

interface IProps {
  className?: string;
  children?: React.ReactNode;
}

const Notification: React.FC<IProps> = ({ children, ...restProps }) => {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};
export default Notification;

const Wrapper = styled.div`
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
