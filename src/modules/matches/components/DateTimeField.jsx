import * as React from "react";
import { useIntl } from "gatsby-plugin-intl";
import PropTypes from "prop-types";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const DateTimeField = ({ value, onChange }) => {
  const intl = useIntl();

  const [selectedDate, setSelectedDate] = React.useState(new Date(value));
  const handleDateChange = (date) => {
    setSelectedDate(date);
    onChange(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        margin="normal"
        id="date-picker-dialog"
        label={intl.formatMessage({ id: "matchDate"})}
        format="dd/MM/yyyy"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': intl.formatMessage({ id: "matchDate"}),
        }}
      />
      <KeyboardTimePicker
        margin="normal"
        id="time-picker"
        label={intl.formatMessage({ id: "matchTime"})}
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': intl.formatMessage({ id: "matchTime"}),
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

DateTimeField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default DateTimeField;