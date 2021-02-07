import * as React from "react";
import { useIntl } from "gatsby-plugin-intl";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { editMatch, updatedOrCreatedMatch } from "./matchesSlice";
import Drawer from "../../modules/common/components/Drawer";
import { Grid } from "../../modules/common/components/Layout";
import MatchPanel from "../../modules/matches/components/MatchPanel";
import EditMatchField from "../../modules/matches/components/EditMatchField";
import Helpers from "../../helpers";
import Dates from "../../helpers/dates";

// import WhatsappShareLink from "../modules/common/components/WhatsappShareLink";
// import Button from "../../modules/common/components/Button";

// const clubName = "Partido+en+Montgat+Padel";
// const clubUrl = "https%3A%2F%2Fgoo.gl%2Fmaps%2FjCHX9hiu8FBHMAjH8";
// const matchDate = "Martes+02%2F02";
// const matchTime = "19%3A00h+a+20%3A30h";
// const p1 = "Marc";
// const p2 = "Dani";
// const p3 = "Tomas";
// const p4 = "%3F";
// let template = `${clubName}%0D%0A%0D%0A${clubUrl}%0D%0A%0D%0A%F0%9F%93%85${matchDate}%0D%0A%F0%9F%95%92${matchTime}`;
// template += `%0D%0A%0D%0A%F0%9F%8E%BE+${p1}%0D%0A%F0%9F%8E%BE+${p2}%0D%0A%F0%9F%8E%BE+${p3}+%0D%0A%F0%9F%8E%BE+${p4}`;

const mapDispatchToProps = { editMatch, updatedOrCreatedMatch };
const mapStateToProps = ({ matches }) => {
  return {
    editing: matches.editing
  }
}

const MatchForm = ({ match, editing, editMatch, updatedOrCreatedMatch }) => {
  const intl = useIntl();

  return (
    <>
      <Grid>
        <MatchPanel
          title={intl.formatMessage({ id: "club" })}
          onEdit={() => editMatch("clubName")}
          editLabel={intl.formatMessage({ id: "editClub" })}
        >
          <p>{match.clubName || ""}</p>
        </MatchPanel>
        <MatchPanel
          title={intl.formatMessage({ id: "dateAndTime" })}
          onEdit={() => editMatch("dateAndTime")}
          editLabel={intl.formatMessage({ id: "editDateAndTime" })}
        >
          {match.dateAndTime ?
            <>
              <p>{Helpers.capitalise(Dates.format(new Date(match.dateAndTime), "EEEE dd 'de' LLLL 'de' yyyy", intl.locale))}</p>
              <p>
                {Dates.format(new Date(match.dateAndTime), "H:mm", intl.locale)}
                {` - `}
                {Dates.format(Dates.addMinutes(new Date(match.dateAndTime), 90), "H:mm", intl.locale)}
              </p>
            </> : <p></p>}
        </MatchPanel>
        <MatchPanel title={intl.formatMessage({ id: "players" })}>
          <p>Jugadores</p>
        </MatchPanel>
      </Grid>
      <Drawer
        visible={editing !== "idle"}
        onHide={() => editMatch("idle")}
      >
        <EditMatchField field={editing} value={match[editing]} onFinish={value => updatedOrCreatedMatch({
          ...match,
          [editing]: value
        })} />
      </Drawer>
    </>
  );
};

MatchForm.propTypes = {
  match: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchForm);