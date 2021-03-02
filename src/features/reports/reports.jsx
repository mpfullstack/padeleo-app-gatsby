import * as React from "react";
import styled from "styled-components";
import { useIntl } from "gatsby-plugin-intl";
import { connect } from "react-redux";
import { matchesSelectors } from "../matches/matchesSlice";
import ReportFilters from "./reportFilters";
import { MONTHLY, WEEKLY } from "./reportsSlice";
import Dates from "../../helpers/dates";
import ReportView from "../../modules/reports/components/ReportView";

const mapDispatchToProps = {};
const mapStateToProps = ({ matches, reports }) => {
  const { start, end, period } = reports;
  return {
    matches: matchesSelectors.selectByDates(matches, { start, end }),
    start,
    end,
    period
  }
};

const ReportsWrapper = styled.div``;

const Reports = ({ matches, period, start, end }) => {
  const intl = useIntl();

  const reportsData = matches.reduce((accumulator, match) => {
    if (period === MONTHLY) {
      const key = Dates.format(new Date(match.dateAndTime.start), "MM/yyyy");
      if (key in accumulator) {
        accumulator[key].matchesAmount += 1;
        accumulator[key].cost += match.costPerPlayer ? Number(match.costPerPlayer) : 0;
      } else {
        accumulator[key] = {
          date: Dates.format(new Date(match.dateAndTime.start), "MM/01/yyyy"),
          matchesAmount: 1,
          cost: match.costPerPlayer ? match.costPerPlayer : 0
        };
      }
      accumulator.totalCost += match.costPerPlayer ? Number(match.costPerPlayer) : 0;
      accumulator.totalMatchesAmount += 1;
    } else {

    }
    return accumulator;
  }, {
    totalCost: 0,
    totalMatchesAmount: 0
  });

  return (
    <ReportsWrapper>
      <h1 style={{display: "none"}}>{intl.formatMessage({ id: "reports" })}</h1>
      <ReportFilters />
      <ReportView data={reportsData} period={period} start={start} end={end} />
    </ReportsWrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Reports);

