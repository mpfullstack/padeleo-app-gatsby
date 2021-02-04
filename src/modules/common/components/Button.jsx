import * as React from "react";
// import { Button as AntdButton } from 'antd';
import { Button as RSButton } from "reactstrap";
import styled from "styled-components";

// export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   children: React.ReactElement | string;
// }

// TODO: Define react props

const StyledButton = styled(RSButton)``;

const Button = ({
  children,
  ...rest
 }) => {
  return <StyledButton color="primary" {...rest}>{children}</StyledButton>;
};

export default Button;
