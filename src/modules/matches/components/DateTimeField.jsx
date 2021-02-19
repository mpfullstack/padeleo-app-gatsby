import * as React from "react";
import PropTypes from "prop-types";
import DateTimePicker from "../../common/components/DateTime/DateTimePicker";

const DateTimeField = ({ start, end, onChange }) => {
  return <DateTimePicker start={start} end={end} onChange={onChange} />;
};

DateTimeField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default DateTimeField;