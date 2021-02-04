import * as React from "react";
import styled from "styled-components";
import { FormGroup, FormLabel, FormControl } from ".";
import { Col } from "../Layout";

export const FormControlWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .form-control:focus {
  }
  .form-control.is-valid:focus {
    border-color: #28a745;
    box-shadow: 0 0 0 0.2rem rgba(40,167,69,.25);
  }
  .form-control.is-invalid:focus {
    border-color: #dc3545;
    box-shadow: 0 0 0 0.2rem rgba(220,53,69,.25);
  }
`;

export default ({ label, placeholder, name, error, isValid, as = 'input', children = null, ...rest}) => {
  return (
    <FormControlWrapper>
      <FormGroup as={Col} md='4' lg='8' controlId={name}>
        {label ? <FormLabel>{label}</FormLabel> : null}
        <FormControl placeholder={placeholder} {...isValid} as={as} {...rest}>{children}</FormControl>
        {isValid ? <FormControl.Feedback type={isValid.isValid ? 'valid' : 'invalid'}>
          {error}
        </FormControl.Feedback>
        : null}
      </FormGroup>
    </FormControlWrapper>
  );
}