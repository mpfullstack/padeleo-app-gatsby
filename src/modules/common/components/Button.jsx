import * as React from "react";
import RSButton from "react-bootstrap/Button";
import styled from "styled-components";

// TODO: Define react props

const StyledButton = styled(RSButton)``;

const Button = ({
  children,
  ...rest
 }) => {
  return <StyledButton color="primary" {...rest}>{children}</StyledButton>;
};

export default Button;
