import * as React from "react";
// TODO: Move to common components
import MuiTextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

const TextField = ({ id, label, value, onChange }) => {
  return (
    <MuiTextField
      id={id}
      label={label}
      onChange={(e) => onChange(e.target.value)}
      defaultValue={value}
      variant="outlined" />
  );
};

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default TextField;