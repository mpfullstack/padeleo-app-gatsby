import * as React from "react";
import Radio from "@material-ui/core/Radio";
import MuiRadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import PropTypes from "prop-types";

const RadioGroup = ({ options, onChange, name, label, selected, showLabel = true }) => {
  const [value, setValue] = React.useState(selected);

  const handleChange = (event) => {
    setValue(event.target.value);
    if (typeof onChange === 'function') {
      onChange(event.target.value);
    }
  };

  return (
    <FormControl component="fieldset">
      <FormLabel style={!showLabel ? { display: "none" } : {}} component="legend">{label}</FormLabel>
      <MuiRadioGroup aria-label={label} name={name} value={value} onChange={handleChange}>
        {options.map((option) => {
          return <FormControlLabel key={option.value} className="radio-control" value={option.value} control={<Radio />} label={option.label} />;
        })}
      </MuiRadioGroup>
    </FormControl>
  );
}

RadioGroup.propTypes = {
  /**
   * An array containing objects with the form:
   * {
   *   label: "",
   *   value: ""
   * }
   */
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  selected: PropTypes.string,
  showLabel: PropTypes.bool
}

export default RadioGroup;