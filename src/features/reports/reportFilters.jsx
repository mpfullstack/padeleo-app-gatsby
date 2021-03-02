import * as React from "react";
import styled from "styled-components";
import { setStartDate, setEndDate, changePeriod } from "./reportsSlice";
import { useIntl } from "gatsby-plugin-intl";
import { connect } from "react-redux";

const mapDispatchToProps = { setStartDate, setEndDate, changePeriod };
const mapStateToProps = ({ reports }) => {
  return {
    start: reports.start,
    end: reports.end,
    period: reports.period
  }
}

const ReportFilters = styled.div``;

const ReportFilters = ({ start, end, period, setStartDate, setEndDate, changePeriod }) => {
  const intl = useIntl();

  return (
    <ReportFiltersWrapper>

    </ReportFiltersWrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportFilters);

