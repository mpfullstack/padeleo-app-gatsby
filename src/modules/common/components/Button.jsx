import * as React from "react";
import UIButton from '@material-ui/core/Button';
import styled from "styled-components";

// TODO: Define react props

const StyledButton = styled(UIButton)``;

const Button = ({
  children,
  ...rest
 }) => {
  return <StyledButton color="default" {...rest}>{children}</StyledButton>;
};

export default Button;
