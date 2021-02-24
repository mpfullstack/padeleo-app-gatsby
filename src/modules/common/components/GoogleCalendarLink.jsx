import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "./Button";
import { GoogleCalenarIcon } from "./Icon";

const StyledButton = styled(Button)`
  &.MuiButton-containedPrimary {
    margin-top: 10px;
    width: 100%;
    background-color: #fff;
    color: #333;
    &:hover {
      background-color: #eee;
    }
    .MuiButton-label {
      font-weight: 800;
    }
  }
`;

const GoogleCalendarLink = ({
  children,
  title,
  details = "",
  dates = "",
  location = "",
  ariaLabel = ""
}) => {
  return (
    <StyledButton
      variant="contained"
      aria-label={ariaLabel}
      color="primary"
      startIcon={<GoogleCalenarIcon />}
      target="_blank"
      href={
        `http://www.google.com/calendar/gp#~calendar:view=e&bm=1&action=TEMPLATE&`+
        `text=${encodeURIComponent(title)}&dates=${encodeURIComponent(dates)}`+
        `&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}&trp=false`
      }
    >
      {children}
    </StyledButton>
  );
};

GoogleCalendarLink.propTypes = {
  children: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  details: PropTypes.string,
  /**
   * Expects a format of yyyyMMddThhmmss/yyyyMMddThhmmss being the first start date and second end date
   */
  dates: (props, propName, componentName) => {
    if (!/\d{8}T\d{6}\/\d{8}T\d{6}/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  },
  location: PropTypes.string,
  arialLabel: PropTypes.string
};

export default GoogleCalendarLink;
