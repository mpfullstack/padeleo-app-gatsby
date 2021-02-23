import * as React from "react";
import { useIntl } from "gatsby-plugin-intl";
import PropTypes from "prop-types";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker as MuiKeyboardTimePicker,
} from "@material-ui/pickers";
// TODO: Pass locale as a prop
import { localeMap } from "../../../../helpers/dates";

export const KeyboardTimePicker = ({ selectedDate, handleDateChange, label }) => {
  return (
    <MuiKeyboardTimePicker
      margin="normal"
      id="time-picker"
      label={label}
      value={selectedDate}
      onChange={handleDateChange}
      KeyboardButtonProps={{
        'aria-label': label
      }}
      ampm={false} />
  );
};

const TimePicker = ({ value, onChange }) => {
  const intl = useIntl();

  const [selectedDate, setSelectedDate] = React.useState(new Date(value));
  const handleDateChange = (date) => {
    setSelectedDate(date);
    onChange(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={localeMap[intl.locale]}>
      <KeyboardTimePicker
        selectedDate={selectedDate}
        handleDateChange={handleDateChange}
        label={intl.formatMessage({ id: "matchTime"})} />
    </MuiPickersUtilsProvider>
  );
};

TimePicker.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default TimePicker;