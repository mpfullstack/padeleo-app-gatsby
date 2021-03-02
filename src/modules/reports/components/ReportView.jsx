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
    font-size: 16px;
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

const ReportView = ({ data, period }) => {
  const intl = useIntl();
  const keys = Object.keys(data).sort();

  if (keys.length) {
    return (
      <ReportItems container>{
        keys.map(key => {
          return (
            <ReportItem key={key} xs={6} className="report-item">
              <Panel title={Helpers.capitalise(Dates.format(new Date(data[key].date), "MMMM", intl.locale))}>
                <p className="text matches-amount">{data[key].matchesAmount} {intl.formatMessage({ id: "matches" })}</p>
                <p className="text cost">{data[key].cost} &euro;</p>
              </Panel>
            </ReportItem>
          );
        })
      }</ReportItems>
    );
  } else {
    return null;
  }
}

ReportView.propTypes = {
  data: PropTypes.object,
  period: PropTypes.oneOf([MONTHLY, WEEKLY])
};

export default ReportView;
