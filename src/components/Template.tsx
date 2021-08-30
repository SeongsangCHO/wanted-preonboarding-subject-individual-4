import React from "react";
import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
}

const TodoPageTemplate: React.FC<IProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
export default TodoPageTemplate;

const Container = styled.main`
  max-width: 768px;
  width: 100%;
  padding: 24px;
  margin: 0 auto;
  border: 1px solid black;
`;