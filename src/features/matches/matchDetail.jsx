import * as React from "react";
import { useIntl } from "gatsby-plugin-intl";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { editMatchField, updatedOrCreatedMatch } from "./matchesSlice";
import Drawer from "../../modules/common/components/Drawer";
import { Grid, Row, Col } from "../../modules/common/components/Layout";
import MatchPanel from "../../modules/matches/components/MatchPanel";
import MatchForm from "../../modules/matches/components/MatchForm";
import Players from "../../modules/matches/components/Players";
import WhatsappShareLink from "../../modules/common/components/WhatsappShareLink";
import GoogleCalendarLink from "../../modules/common/components/GoogleCalendarLink";
import Helpers from "../../helpers";
import Dates from "../../helpers/dates";

const mapDispatchToProps = { editMatchField, updatedOrCreatedMatch };
const mapStateToProps = ({ settings, matches }) => {
  return {
    editing: matches.editing,
    settings
  }
}

const MatchDetail = ({ match, editing, editMatchField, updatedOrCreatedMatch, settings }) => {
  const intl = useIntl();

  const shareContent = Helpers.buildMatchShareContent(match, intl, settings.emojis);
  const startMatchTime = Helpers.getStartMatchTime(match);
  const endMatchTime = Helpers.getEndMatchTime(match);

  return (
    <>
      <Grid>
        <MatchPanel
          title={intl.formatMessage({ id: "club" })}
          onEdit={() => editMatchField("clubName")}
          editLabel={intl.formatMessage({ id: "editClub" })}
        >
          <p className="text">{match.clubName || "---"}</p>
        </MatchPanel>
        <MatchPanel
          title={intl.formatMessage({ id: "dateAndTime" })}
          onEdit={() => editMatchField("dateAndTime")}
          editLabel={intl.formatMessage({ id: "editDateAndTime" })}
        >
          {startMatchTime ?
            <>
              <p className="text">{Helpers.capitalise(Dates.format(startMatchTime, "EEEE dd/MM/yyyy", intl.locale))}</p>
              <p className="text">
                {Dates.format(startMatchTime, "H:mm", intl.locale)}
                {` - `}
                {Dates.format(endMatchTime, "H:mm", intl.locale)}
              </p>
            </> : <p>---</p>}
        </MatchPanel>
        <MatchPanel
          title={intl.formatMessage({ id: "level" })}
          onEdit={() => editMatchField("level")}
          editLabel={intl.formatMessage({ id: "editLevel" })}
        >
          <p className="text">{match.level || "---"}</p>
        </MatchPanel>
        <MatchPanel
          title={intl.formatMessage({ id: "players" })}
          onEdit={() => editMatchField("players")}
          editLabel={intl.formatMessage({ id: "editPlayers" })}
        >
          <Players players={match.players} />
        </MatchPanel>
        <Row>
          <Col xs="6">
            <WhatsappShareLink fullWidth={true} shareContent={shareContent} encode={false}>
              {intl.formatMessage({ id: "share" })}
            </WhatsappShareLink>
          </Col>
          <Col xs="6">
            <GoogleCalendarLink
              title={intl.formatMessage({ id: "padelMatch" })}
              details={Helpers.buildMatchDetailsForCalendar(match, intl)}
              location={match.clubName}
              dates={startMatchTime ? Dates.format(startMatchTime, "yyyyMMdd'T'HHmmss") + '/' + Dates.format(endMatchTime, "yyyyMMdd'T'HHmmss") : ""}
              ariaLabel={intl.formatMessage({ id: "addToGoogleCalendar" })}
            >
              {intl.formatMessage({ id: "calendar" })}
            </GoogleCalendarLink>
          </Col>
        </Row>
      </Grid>
      <Drawer
        visible={editing !== "idle"}
        onHide={() => editMatchField("idle")}
      >
        <div style={{
          maxWidth: "520px",
          width: "96%",
          margin: "0 auto"
        }}>
          <MatchForm field={editing} value={match[editing]} onFinish={value => updatedOrCreatedMatch({
            ...match,
            [editing]: value
          })} />
        </div>
      </Drawer>
    </>
  );
};

MatchDetail.propTypes = {
  match: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchDetail);