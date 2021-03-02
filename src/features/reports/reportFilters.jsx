import * as React from "react";
import styled from "styled-components";
import { setStartDate, setEndDate, changePeriod } from "./reportsSlice";
import { connect } from "react-redux";
import DatesFilter from "../../modules/reports/components/DatesFilter";
import PeriodFilter from "../../modules/reports/components/PeriodFilter";

const mapDispatchToProps = { setStartDate, setEndDate, changePeriod };
const mapStateToProps = ({ reports }) => {
  return {
    start: reports.start,
    end: reports.end,
    period: reports.period
  }
}

const ReportFiltersWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ReportFilters = ({ start, end, period, setStartDate, setEndDate, changePeriod }) => {
  const handleDatesChange = (field, value) => {
    if (field === "start") {
      setStartDate(value);
    } else {
      setEndDate(value);
    }
  }

  return (
    <ReportFiltersWrapper>
      <DatesFilter start={start} end={end} onChange={handleDatesChange} />
      <PeriodFilter period={period} onChange={changePeriod} />
    </ReportFiltersWrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportFilters);

