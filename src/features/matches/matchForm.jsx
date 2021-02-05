import * as React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { MatchShape, editMatch } from "./matchesSlice";
import Drawer from "../../modules/common/components/Drawer";
import { Grid } from "../../modules/common/components/Layout";
import MatchPanel from "../../modules/matches/components/MatchPanel";

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

const mapDispatchToProps = { editMatch };
const mapStateToProps = ({ matches }) => {
  return {
    editing: matches.editing
  }
}

const MatchForm = ({ match, editing, editMatch }) => {
  return (
    <>
      <Grid fluid>
        <MatchPanel title="Club" onClick={() => editMatch("clubName")}>
          <p>Padel La Riera - Montgat</p>
        </MatchPanel>
        <MatchPanel title="Fecha y hora" onClick={() => editMatch("dateAndTime")}>
          <p>Jueves 28 de Enero</p>
          <p>20:00h a 21:30h</p>
        </MatchPanel>
        <MatchPanel title="Jugadores">
          <p>Players</p>
        </MatchPanel>
      </Grid>
      <Drawer
        title="Nombre del club"
        visible={editing !== "idle"}
        onHide={() => editMatch("idle")}
      >
        <p>Padel La Riera - Montgat</p>
      </Drawer>
    </>
  );
};

MatchForm.propTypes = {
  match: PropTypes.shape(MatchShape)
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchForm);