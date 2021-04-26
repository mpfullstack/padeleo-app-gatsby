import * as React from "react";
import MuiCheckbox from "@material-ui/core/Checkbox";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from "prop-types";

const Checkbox = ({ label, name, checked, onChange }) => {
  function onChangeValue(e) {
    if (typeof onChange === 'function') {
      onChange(e.target.checked);
    }
  }
  return (
    <FormControlLabel
      control={
        <MuiCheckbox
          name={name}
          checked={checked}
          onChange={onChangeValue} />
        }
      label={label} />
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

export default Checkbox;