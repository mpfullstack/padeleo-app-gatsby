import * as React from "react";
import { useIntl } from "gatsby-plugin-intl";
import PropTypes from "prop-types";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
// TODO: Pass locale as a prop
import { localeMap } from "../../../../helpers/dates";

const DatePicker = ({ date, label, onChange }) => {
  const intl = useIntl();

  const [selectedDate, setSelectedDate] = React.useState(date ? new Date(date) : null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (typeof onChange === "function") {
      onChange(date);
    }
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={localeMap[intl.locale]}>
      <KeyboardDatePicker
        margin="normal"
        id={`date-picker-dialog-${label}`.replace(/\s/gmi, "")}
        label={label}
        format="dd/MM/yyyy"
        value={selectedDate}
        onChange={(value) => handleDateChange(value)}
        KeyboardButtonProps={{
          'aria-label': label,
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

DatePicker.propTypes = {
  date: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func
};

export default DatePicker;