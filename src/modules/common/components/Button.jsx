import * as React from "react";
import PropTypes from "prop-types";
import UIButton from '@material-ui/core/Button';
import styled from "styled-components";

// TODO: Define react props

const StyledButton = styled(UIButton)``;

const Button = ({
  children,
  color = "default",
  ...rest
 }) => {
  return <StyledButton variant="contained" color={color} {...rest}>{children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string
};

export default Button;
