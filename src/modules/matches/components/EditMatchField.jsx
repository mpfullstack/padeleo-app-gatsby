import * as React from "react";
import { useIntl } from "gatsby-plugin-intl";
import Button from "../../common/components/Button";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import styled from "styled-components";
import { Row, Col } from "../../common/components/Layout";

const EditMatchField = ({ field, value, onFinish }) => {
  const intl = useIntl();

  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  function getFieldValue() {
    if (field === "clubName") {
      return document.getElementById(field).value;
    } else {
      return selectedDate;
    }
  }


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <form noValidate autoComplete="off" onSubmit={(e) => {
      onFinish(getFieldValue());
      e.preventDefault();
      e.stopPropagation();
    }}>
      {field === "clubName" ?
        <TextField
          id={field}
          label={intl.formatMessage({ id: field })}
          defaultValue={value}
          variant="outlined" /> : null}

      {field === "dateAndTime" ?
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date picker dialog"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </MuiPickersUtilsProvider> : null}

      <Button type="submit" color="primary">{intl.formatMessage({ id: "save" })}</Button>
    </form>
  );
};

EditMatchField.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string,
  onFinish: PropTypes.func.isRequired,
  onClose: PropTypes.func
};

export default EditMatchField;