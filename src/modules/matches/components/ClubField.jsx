import * as React from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

const ClubField = ({ id, label, value, onChange }) => {
  return (
    <TextField
      id={id}
      label={label}
      onChange={(e) => onChange(e.target.value)}
      defaultValue={value}
      variant="outlined" />
  );
};

ClubField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default ClubField;