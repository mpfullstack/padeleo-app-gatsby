import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { IconButton, EditIcon } from "../../common/components/Icon";
import Panel from "../../common/components/Panel";
import { Row, Col } from "../../common/components/Layout";
import Tooltip from "../../common/components/Tooltip";

// const RowPanel = styled(Row)`
//   margin: 10px 0;
//   .MuiCardHeader-root {
//     padding-top: 5px;
//     padding-bottom: 5px;
//   }
//   .MuiCardHeader-title {
//     font-size: 15px;
//     font-weight: 400;
//   }
//   .MuiCardContent-root {
//     padding: 5px 16px;
//     &:last-child {
//       padding-bottom: 5px;
//     }
//   }
//   .MuiCardContent-root {
//     font-weight: 800;
//     font-size: 18px;
//     .text {
//       margin: 5px 0;
//     }
//   }
// `;

const StyledPlayerItem = styled.p`
  margin: 6px 0 6px 0;
`;

const PlayerItem = ({ player }) => {
  return (
    <StyledPlayerItem>{player.name || "---"}</StyledPlayerItem>
  );
};

const Players = ({ players }) => {
  return (
    <>
      <Row>
        <Col xs={6}>
          <PlayerItem player={players[0]} />
        </Col>
        <Col xs={6}>
          <PlayerItem player={players[1]} />
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <PlayerItem player={players[2]} />
        </Col>
        <Col xs={6}>
          <PlayerItem player={players[3]} />
        </Col>
      </Row>
    </>
  );
};

Players.propTypes = {
  players: PropTypes.array.isRequired,
  onEditPlayer: PropTypes.func
};

export default Players;