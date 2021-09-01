import React from "react";
import styled from "styled-components";

import { Shadow } from "styles/mixin";

interface IProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: (params: any) => void;
}

const CommonButton: React.FC<IProps> = ({ children, ...restProps }) => {
  return <Button {...restProps}>{children}</Button>;
};
export default CommonButton;

const Button = styled.button`
  transition: 0.2s;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  ${Shadow};
  /* background-color: ${({ theme }) => theme.colors.primary}; */
`;
