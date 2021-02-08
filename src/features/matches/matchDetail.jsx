import * as React from "react";
import { useIntl } from "gatsby-plugin-intl";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { editMatch, updatedOrCreatedMatch } from "./matchesSlice";
import Drawer from "../../modules/common/components/Drawer";
import { Grid, Row, Col } from "../../modules/common/components/Layout";
import MatchPanel from "../../modules/matches/components/MatchPanel";
import MatchForm from "../../modules/matches/components/MatchForm";
import Players from "../../modules/matches/components/Players";
import WhatsappShareLink from "../../modules/common/components/WhatsappShareLink";
import Helpers from "../../helpers";
import Dates from "../../helpers/dates";

const mapDispatchToProps = { editMatch, updatedOrCreatedMatch };
const mapStateToProps = ({ matches }) => {
  return {
    editing: matches.editing
  }
}

const MatchDetail = ({ match, editing, editMatch, updatedOrCreatedMatch }) => {
  const intl = useIntl();

  const shareContent = Helpers.buildMatchShareContent(match, intl);

  return (
    <>
      <Grid>
        <MatchPanel
          title={intl.formatMessage({ id: "club" })}
          onEdit={() => editMatch("clubName")}
          editLabel={intl.formatMessage({ id: "editClub" })}
        >
          <p className="text">{match.clubName || "---"}</p>
        </MatchPanel>
        <MatchPanel
          title={intl.formatMessage({ id: "dateAndTime" })}
          onEdit={() => editMatch("dateAndTime")}
          editLabel={intl.formatMessage({ id: "editDateAndTime" })}
        >
          {match.dateAndTime ?
            <>
              <p className="text">{Helpers.capitalise(Dates.format(new Date(match.dateAndTime), "EEEE dd/MM/yyyy", intl.locale))}</p>
              <p className="text">
                {Dates.format(new Date(match.dateAndTime), "H:mm", intl.locale)}
                {` - `}
                {Dates.format(Dates.addMinutes(new Date(match.dateAndTime), 90), "H:mm", intl.locale)}
              </p>
            </> : <p>---</p>}
        </MatchPanel>
        <MatchPanel
          title={intl.formatMessage({ id: "level" })}
          onEdit={() => editMatch("level")}
          editLabel={intl.formatMessage({ id: "editLevel" })}
        >
          <p className="text">{match.level || "---"}</p>
        </MatchPanel>
        <MatchPanel
          title={intl.formatMessage({ id: "players" })}
          onEdit={() => editMatch("players")}
          editLabel={intl.formatMessage({ id: "editPlayers" })}
        >
          <Players players={match.players} />
        </MatchPanel>
        <Row>
          <Col>
            <WhatsappShareLink fullWidth={true} shareContent={shareContent} encode={false}>
              {intl.formatMessage({ id: "share" })}
            </WhatsappShareLink>
          </Col>
        </Row>
      </Grid>
      <Drawer
        visible={editing !== "idle"}
        onHide={() => editMatch("idle")}
      >
        <MatchForm field={editing} value={match[editing]} onFinish={value => updatedOrCreatedMatch({
          ...match,
          [editing]: value
        })} />
      </Drawer>
    </>
  );
};

MatchDetail.propTypes = {
  match: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchDetail);