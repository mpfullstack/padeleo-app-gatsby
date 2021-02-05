import * as React from "react";
import { Button as RSButton } from "rsuite";
import styled from "styled-components";

// TODO: Define react props

const StyledButton = styled(RSButton)``;

const Button = ({
  children,
  ...rest
 }) => {
  return <StyledButton appearance="primary" {...rest}>{children}</StyledButton>;
};

export default Button;
