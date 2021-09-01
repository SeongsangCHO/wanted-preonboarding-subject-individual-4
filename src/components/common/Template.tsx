import React from "react";
import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
}

const TodoPageTemplate: React.FC<IProps> = ({ children }) => {
  //todo page width, height 템플릿
  return <Container>{children}</Container>;
};
export default React.memo(TodoPageTemplate);

const Container = styled.main`
  max-width: 768px;
  width: 100%;
  padding: 24px;
  margin: 0 auto;
`;
