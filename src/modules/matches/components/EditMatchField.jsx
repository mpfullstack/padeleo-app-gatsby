import * as React from "react";
import { useIntl } from "gatsby-plugin-intl";
import Button from "../../common/components/Button";
import PropTypes from "prop-types";
import DateTimeField from "./DateTimeField";
import ClubField from "./ClubField";

const EditMatchField = ({ field, value, onFinish }) => {
  const intl = useIntl();

  let fieldValue = value;
  const handleChange = (changedValue) => {
    fieldValue = changedValue;
  };

  return (
    <form noValidate autoComplete="off" onSubmit={(e) => {
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

      <Button type="submit" color="primary">{intl.formatMessage({ id: "save" })}</Button>
    </form>
  );
};

EditMatchField.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string,
  onFinish: PropTypes.func.isRequired,
  onClose: PropTypes.func
};

export default EditMatchField;