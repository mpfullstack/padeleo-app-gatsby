import * as React from "react";
import styled from "styled-components";
import { useIntl } from "gatsby-plugin-intl";
import { connect } from "react-redux";
import ReportFilters from "./reportsSlice";

const mapDispatchToProps = {};
const mapStateToProps = ({ reports }) => {
  return {
    reports
  }
}

const ReportsWrapper = styled.div``;

const Reports = ({ reports }) => {
  const intl = useIntl();

  return (
    <ReportsWrapper>
      <h1 style={{display: "none"}}>{intl.formatMessage({ id: "reports" })}</h1>
      <ReportFilters />
    </ReportsWrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Reports);

