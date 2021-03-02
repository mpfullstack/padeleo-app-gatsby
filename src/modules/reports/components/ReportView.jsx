import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useIntl } from "gatsby-plugin-intl";
import Dates from "../../../helpers/dates";
import Helpers from "../../../helpers";
import { MONTHLY, WEEKLY } from "../../../features/reports/reportsSlice";
import Panel from "../../common/components/Panel";
import { Grid } from "@material-ui/core";
import { Col } from "../../common/components/Layout";

const ReportViewWrapper = styled.div`
  .totals {
    display: flex;
    justify-content: space-between;
    .totals-item {
      font-size: 15px;
    }
  }
`;

const ReportItems = styled(Grid)`
  margin-top: 10px;
  justify-content: space-between;
`;

const ReportItem = styled(Col)`
  &.report-item {
    margin: 10px 0;
    flex-basis: 48%;
  }
  .card-header {
    padding: 10px 10px 0 10px;
    .panel-title {
      font-size: 18px;
      font-weight: bold;
    }
  }
  .card-content {
    padding: 0 10px 10px 10px;
    margin: 0;
    &:last-child {
      padding-bottom: 5px;
    }
    .text {
      margin: 5px 0;
      &.cost {
        font-weight: bold;
        font-size: 18px;
      }
    }
  }
`;

const ReportView = ({ data, start, end, period }) => {
  const intl = useIntl();

  if (period === MONTHLY) {
    const items = [];
    let from = new Date(start);
    const to = new Date(end);
    while(from <= to) {
      const key = Dates.format(new Date(from), "MM/yyyy");
      const itemData = {
        date: Helpers.capitalise(Dates.format(from, "MMM yyyy", intl.locale))
      }
      if (key in data) {
        itemData.matchesAmount = data[key].matchesAmount;
        itemData.cost = data[key].cost;
      }
      items.push(
        <ReportItem key={key} xs={6} className="report-item">
          <Panel title={itemData.date}>
            <p className="text matches-amount">{itemData.matchesAmount || "---"} {intl.formatMessage({ id: "matches" })}</p>
            <p className="text cost">{itemData.cost || "---"} &euro;</p>
          </Panel>
        </ReportItem>
      );
      from = Dates.addMonths(from, 1);
    }

    return (
      <ReportViewWrapper>
        <p className="totals">
          <span className="totals-item">{intl.formatMessage({ id: "totalExpenses" })}: <strong>{data.totalCost} &euro;</strong></span>
          <span className="totals-item">{intl.formatMessage({ id: "matchesPlayed" })}: <strong>{data.totalMatchesAmount}</strong></span>
        </p>
        <ReportItems container>{items}</ReportItems>
      </ReportViewWrapper>
    );
  } else {
    return null;
  }
}

ReportView.propTypes = {
  data: PropTypes.object.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  period: PropTypes.oneOf([MONTHLY, WEEKLY])
};

export default ReportView;
