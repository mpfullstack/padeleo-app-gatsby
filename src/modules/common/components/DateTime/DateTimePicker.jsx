import * as React from "react";
import { useIntl } from "gatsby-plugin-intl";
import PropTypes from "prop-types";
import styled from "styled-components";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { KeyboardTimePicker } from "./TimePicker";
// TODO: Pass locale as a prop
import { localeMap } from "../../../../helpers/dates";

const TimePickersWrapper = styled.div`
  display: flex;
  & > div:first-child {
    margin-right: 10px;
  }
  & > div:last-child {
    margin-left: 10px;
  }
`;

const DateTimePicker = ({ start, end, onChange }) => {
  const intl = useIntl();

  const [selectedStartDate, setSelectedStartDate] = React.useState(new Date(start));
  const [selectedEndDate, setSelectedEndDate] = React.useState(new Date(end));
  const handleDateChange = (field, date) => {
    const dateAndTime = {
      start: selectedStartDate,
      end: selectedEndDate
    };
    if (field === "endTime") {
      setSelectedEndDate(date);
      dateAndTime.end = date;
    } else {
      setSelectedStartDate(date);
      dateAndTime.start = date;
    }
    onChange(dateAndTime);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={localeMap[intl.locale]}>
      <KeyboardDatePicker
        margin="normal"
        id="date-picker-dialog"
        label={intl.formatMessage({ id: "matchDate"})}
        format="dd/MM/yyyy"
        value={selectedStartDate}
        onChange={(value) => handleDateChange("startDate", value)}
        KeyboardButtonProps={{
          'aria-label': intl.formatMessage({ id: "matchDate"}),
        }}
      />
      <TimePickersWrapper>
        <KeyboardTimePicker
          label={intl.formatMessage({ id: "startTime"})}
          selectedDate={selectedStartDate}
          handleDateChange={(value) => handleDateChange("startTime", value)}
        />
        <KeyboardTimePicker
          label={intl.formatMessage({ id: "endTime"})}
          selectedDate={selectedEndDate}
          handleDateChange={(value) => handleDateChange("endTime", value)}
        />
      </TimePickersWrapper>
    </MuiPickersUtilsProvider>
  );
};

DateTimePicker.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default DateTimePicker;