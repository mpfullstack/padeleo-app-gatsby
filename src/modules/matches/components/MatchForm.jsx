import * as React from "react";
import { useIntl } from "gatsby-plugin-intl";
import styled from "styled-components";
import Button from "../../common/components/Button";
import PropTypes from "prop-types";
import DateTimeField from "./DateTimeField";
import ClubField from "./ClubField";
import PlayersField from "./PlayersField";

const StyledForm = styled.form`
  width: 90%;
  margin: 10px auto 0;
  display: flex;
  flex-direction: column;
  .submit {
    margin-top: 20px;
  }
`;

const MatchForm = ({ field, value, onFinish }) => {
  const intl = useIntl();

  let fieldValue = value;
  const handleChange = (changedValue) => fieldValue = changedValue;

  return (
    <StyledForm noValidate autoComplete="off" onSubmit={(e) => {
      onFinish(fieldValue);
      e.preventDefault();
      e.stopPropagation();
    }}>
      {field === "clubName" ?
        <ClubField
          id={field}
          value={value}
          label={intl.formatMessage({ id: field })}
          onChange={handleChange} /> : null}

      {field === "dateAndTime" ?
        <DateTimeField value={value || new Date()} onChange={handleChange} /> : null}

      {field === "level" ?
        <ClubField
          id={field}
          value={value}
          label={intl.formatMessage({ id: field })}
          onChange={handleChange} /> : null}

      {field === "players" ?
        <PlayersField players={value} onChange={handleChange} /> : null}

      <Button className="submit" type="submit" color="primary">{intl.formatMessage({ id: "save" })}</Button>
    </StyledForm>
  );
};

MatchForm.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string,
  onFinish: PropTypes.func.isRequired,
  onClose: PropTypes.func
};

export default MatchForm;