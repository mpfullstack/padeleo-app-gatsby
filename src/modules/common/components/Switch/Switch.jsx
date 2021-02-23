import * as React from "react";
import MuiSwitch from '@material-ui/core/Switch';
import PropTypes from "prop-types";

const Switch = ({ checked, handleChange, name, label }) => {
  return (
    <MuiSwitch
      checked={checked}
      onChange={handleChange}
      name={name}
      inputProps={{ 'aria-label': label }}
    />
  );
}

Switch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default Switch;
