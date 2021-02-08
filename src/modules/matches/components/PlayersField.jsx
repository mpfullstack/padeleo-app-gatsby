import * as React from "react";
import { useIntl } from "gatsby-plugin-intl";
import styled from "styled-components";
// TODO: Move to common components
import TextField from "@material-ui/core/TextField";
import { Row, Col } from "../../common/components/Layout";
import PropTypes from "prop-types";

const StyledRow = styled(Row)`
  &.MuiGrid-container:first-child {
    margin-bottom: 30px;
  }
`;

const PlayersField = ({ players, onChange }) => {
  const intl = useIntl();

  let changedPlayers = [...players];
  function handleChange(id, value) {
    changedPlayers[id] = {
      ...players[id],
      name: value
    };
    onChange(changedPlayers);
  }

  return (
    <>
      <StyledRow>
        <Col xs={6}>
          <TextField
            id="player1"
            label={intl.formatMessage({ id: "player" }, { num: 1 })}
            onChange={(e) => handleChange(0, e.target.value)}
            defaultValue={players[0].name}
            variant="outlined" />
        </Col>
        <Col xs={6}>
          <TextField
            id="player2"
            label={intl.formatMessage({ id: "player" }, { num: 2 })}
            onChange={(e) => handleChange(1, e.target.value)}
            defaultValue={players[1].name}
            variant="outlined" />
        </Col>
      </StyledRow>
      <StyledRow>
        <Col xs={6}>
          <TextField
            id="player3"
            label={intl.formatMessage({ id: "player" }, { num: 3 })}
            onChange={(e) => handleChange(2, e.target.value)}
            defaultValue={players[2].name}
            variant="outlined" />
        </Col>
        <Col xs={6}>
          <TextField
            id="player4"
            label={intl.formatMessage({ id: "player" }, { num: 4 })}
            onChange={(e) => handleChange(3, e.target.value)}
            defaultValue={players[3].name}
            variant="outlined" />
        </Col>
      </StyledRow>
    </>
  );
};

PlayersField.propTypes = {
  players: PropTypes.array.isRequired,
  onChange: PropTypes.func
};

export default PlayersField;
