import * as React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  font-size: 18px;
  margin: 5px 0;
`;

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
}

export default Title;