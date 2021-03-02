import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useIntl } from "gatsby-plugin-intl";
import { MONTHLY, WEEKLY } from "../../../features/reports/reportsSlice";
import RadioGroup from "../../common/components/RadioGroup";

const PeriodFilterWrapper = styled.div`
  .radio-control {
    margin: 0;
    &:first-child {
      margin: 16px 0 0 0;
    }
  }
`;

const PeriodFilter = ({ period, onChange }) => {
  const intl = useIntl();

  const options = [
    {
      label: intl.formatMessage({ id: MONTHLY }),
      value: MONTHLY
    },
    {
      label: intl.formatMessage({ id: WEEKLY }),
      value: WEEKLY
    }
  ];

  return (
    <PeriodFilterWrapper>
      <RadioGroup
        options={options} selected={period} name="period" label={intl.formatMessage({ id: "period" })} showLabel={false} onChange={onChange} />
    </PeriodFilterWrapper>
  );
};

PeriodFilter.propTypes = {
  period: PropTypes.string,
  onChange: PropTypes.func
};

export default PeriodFilter;