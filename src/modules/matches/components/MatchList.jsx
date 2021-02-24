import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useIntl } from "gatsby-plugin-intl";
import Helpers from "../../../helpers";
import Dates from "../../../helpers/dates";
import { Col } from "../../common/components/Layout";
import { IconButton, ArrowForward, DeleteIcon, CheckIcon, CloseIcon } from "../../common/components/Icon";
import Tooltip from "../../common/components/Tooltip";

const MatchItem = styled.div`
  width: 100%;
  padding: 8px 12px;
  margin-bottom: 20px;
  text-transform: inherit;
  -webkit-box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 4px;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    .text {
      margin: 2px 0;
      text-align: left;
    }
    .club {
      font-weight: bold;
      font-size: 18px;
    }
    .date-and-time {
      font-size: 15px;
      line-height: 1.5;
    }
    .no-value {
      font-style: italic;
      font-size: 14px;
    }
  }
  .actions {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .delete {
      color: #d83a3a;
    }
  }
`;

const DeleteConfirm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .delete-text {
    font-size: 16px;
    text-align: center;
  }
  .icons {
    display: flex;
  }
`;

const DeleteMatchAction = ({ matchId, onDeleteMatch, ondeletedMatch, deleteMatchId, intl }) => {
  if (deleteMatchId === matchId) {
    return (
      <DeleteConfirm>
        <span className="delete-text">Eliminar?</span>
        <div className="icons">
          <Tooltip title={intl.formatMessage({ id: "delete"})}>
            <IconButton
              className="delete"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                ondeletedMatch(matchId);
              }}
            >
              <CheckIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={intl.formatMessage({ id: "cancel"})}>
            <IconButton
              className="cancel"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onDeleteMatch("idle");
              }}
            >
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </div>
      </DeleteConfirm>
    )
  } else {
    return (
      <Tooltip title={intl.formatMessage({ id: "deleteMatch"})}>
        <IconButton
          className="delete"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onDeleteMatch(matchId);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    );
  }
}

const MatchList = ({ matches, onEditMatch, onDeleteMatch, ondeletedMatch, deleteMatchId }) => {
  const intl = useIntl();
  const deleteActions = {
    onDeleteMatch, ondeletedMatch, deleteMatchId
  };

  if (matches.length) {
    return matches.map((match) => {
      const startMatchTime = Helpers.getStartMatchTime(match);
      const endMatchTime = Helpers.getEndMatchTime(match);

      return (
        <MatchItem key={`match-${match.id}`} variant="text" onClick={() => typeof onEditMatch === 'function' ? onEditMatch(match) : null}>
          <Col className="content" xs={10}>
            <p className="text club">
              {match.clubName ?
                match.clubName
                :
                <span className="text no-value">{intl.formatMessage({ id: "noClubDefined" })}</span>
              }
            </p>
            <p className="text date-and-time">
              {startMatchTime ?
                <>
                  {Helpers.capitalise(Dates.format(startMatchTime, "EEEE dd/MM/yyyy", intl.locale))}<br />
                  {` ${Helpers.capitalise(intl.formatMessage({ id: "from" }))} `}
                  {Dates.format(startMatchTime, "H:mm", intl.locale)}
                  {` ${intl.formatMessage({ id: "to" })} `}
                  {Dates.format(endMatchTime, "H:mm", intl.locale)}
                </>
                : <span className="text no-value">{intl.formatMessage({ id: "noDateTimeDefined" })}</span>
              }
            </p>
          </Col>
          <Col xs={2} className="actions">
            <Tooltip title={intl.formatMessage({ id: "editMatch"})}>
              <IconButton color="primary"  className="edit"><ArrowForward /></IconButton>
            </Tooltip>
            <DeleteMatchAction matchId={match.id} {...deleteActions} intl={intl} />
          </Col>
        </MatchItem>
      );
    });
  } else {
    return <p style={{ textAlign: "center", margin: "25px 0" }}>{intl.formatMessage({ id: "youHaveNoMatches" })}</p>;
  }
};

MatchList.propTypes = {
  matches: PropTypes.array.isRequired,
  onEditMatch: PropTypes.func
};

export default MatchList;