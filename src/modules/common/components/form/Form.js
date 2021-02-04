import * as React from "react";
import styled from "styled-components";
import { useFormState } from "react-use-form-state";

const FormWrapper = styled.div`
  .form-group {
    margin-bottom: 0;
    min-height: 70px;
  }
  .form-row {
    justify-content: center;
    align-items: top;
  }
`;

const Form = ({ onSubmit, formData, renderForm, errors = [] }) => {
  const [formState, input] = useFormState(formData);

  React.useEffect(() => {
    errors.forEach(error => {
      formState.setFieldError(error.field, error.error);
    })
  }, [errors, formState]);

  function handleSubmit(e) {
    if (typeof onSubmit === 'function') {
      onSubmit(e, formState.values);
      e.preventDefault();
      e.stopPropagation();
    }
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        {renderForm(formState, input)}
      </form>
    </FormWrapper>
  );
};

export default Form;