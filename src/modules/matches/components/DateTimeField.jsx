import * as React from "react";
import PropTypes from "prop-types";
import DateTimePicker from "../../common/components/DateTimePicker";

const DateTimeField = ({ value, onChange }) => {
  return <DateTimePicker value={value} onChange={onChange} />;
};

DateTimeField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default DateTimeField;