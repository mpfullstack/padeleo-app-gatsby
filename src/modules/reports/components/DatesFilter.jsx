import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useIntl } from "gatsby-plugin-intl";
import DatePicker from "../../common/components/DateTime/DatePicker";

const DatesFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  border-right: 1px solid #ccc;
  padding-right: 25px;
  & > div {
    margin-top: 0;
  }
`;

const DatesFilter = ({ start, end, onChange }) => {
  const intl = useIntl();

  return (
    <DatesFilterWrapper>
      <DatePicker date={start} onChange={(value) => onChange("start", value)} label={intl.formatMessage({ id: "startDate" })} />
      <DatePicker date={end} onChange={(value) => onChange("end", value)} label={intl.formatMessage({ id: "endDate" })} />
    </DatesFilterWrapper>
  );
};

DatesFilter.propTypes = {
  start: PropTypes.object,
  end: PropTypes.object,
  onChange: PropTypes.func
};

export default DatesFilter;