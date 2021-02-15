import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useIntl } from "gatsby-plugin-intl";
import Helpers from "../../../helpers";
import Dates from "../../../helpers/dates";
import Button from "../../common/components/Button";
import Panel from "../../common/components/Panel";
import { Col } from "../../common/components/Layout";
import { ArrowForward } from "../../common/components/Icon";

const MatchItem = styled(Button)`
  &.MuiButton-text {
    width: 100%;
    padding: 8px 12px;
    margin-bottom: 20px;
    text-transform: inherit;
    -webkit-box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    .MuiButton-label {
      display: flex;
      justify-content: center;
      align-items: center;
      .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        .text {
          margin: 0;
        }
        .club {
          font-weight: bold;
          font-size: 16px;
        }
        .date-and-time {
          font-size: 15px;
        }
        .no-value {
          font-style: italic;
          font-size: 14px;
        }
      }
      .arrow-forward {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
    }
  }
`;

const MatchList = ({ matches, onEditMatch }) => {
  const intl = useIntl();

  if (matches.length) {
    return matches.map((match) => {
      return (
        <MatchItem variant="text" onClick={() => typeof onEditMatch === 'function' ? onEditMatch(match) : null}>
          <Col className="content" xs={10}>
            <p className="text club">{match.clubName}</p>
            <p className="text date-and-time">
              {match.dateAndTime ?
                <>
                  {Helpers.capitalise(Dates.format(new Date(match.dateAndTime), "EEEE dd/MM/yyyy", intl.locale))}
                  {` ${intl.formatMessage({ id: "from" })} `}
                  {Dates.format(new Date(match.dateAndTime), "H:mm", intl.locale)}
                  {` ${intl.formatMessage({ id: "to" })} `}
                  {Dates.format(Dates.addMinutes(new Date(match.dateAndTime), 90), "H:mm", intl.locale)}
                </>
                : <span className="text no-value">{intl.formatMessage({ id: "noDateTimeDefined" })}</span>
              }
            </p>
          </Col>
          <Col xs={2} className="arrow-forward"><ArrowForward color="secondary" /></Col>
        </MatchItem>
      );
    });
  } else {
    return null;
  }
};

MatchList.propTypes = {
  matches: PropTypes.array.isRequired,
  onEditMatch: PropTypes.func
};

export default MatchList;