import * as React from "react";
import PropTypes from "prop-types";
import UIButton from '@material-ui/core/Button';
import styled from "styled-components";

// TODO: Define react props

const StyledButton = styled(UIButton)``;

const Button = ({
  children,
  color = "default",
  variant = "contained",
  ...rest
 }) => {
  return <StyledButton color={color} variant={variant} {...rest}>{children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  color: PropTypes.string
};

export default Button;
