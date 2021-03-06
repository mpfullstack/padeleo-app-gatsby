import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { IconButton, EditIcon } from "../../common/components/Icon";
import Panel from "../../common/components/Panel";
import { Row, Col } from "../../common/components/Layout";
import Tooltip from "../../common/components/Tooltip";

const RowPanel = styled(Row)`
  margin-top: 10px;
  margin-bottom: 10px;
  .MuiCardHeader-root {
    padding-top: 12px;
    padding-bottom: 5px;
  }
  .MuiCardHeader-title {
    font-size: 15px;
    font-weight: 400;
  }
  .MuiCardContent-root {
    padding: 5px 16px;
    padding-top: 0;
    &:last-child {
      padding-bottom: 5px;
    }
  }
  .MuiCardContent-root {
    font-weight: 800;
    font-size: 18px;
    .text {
      margin: 5px 0;
      .text-details {
        font-size: 15px;
        /* font-weight: normal; */
        color: #333;
      }
    }
    .sub-text {
      font-size: 14px;
      font-weight: 400;
      margin: 0 0 5px 0;
    }
  }
`;

const MatchPanel = ({ title, onEdit, editLabel = "Edit", children }) => {
  return (
    <RowPanel>
      <Col>
        <Panel title={title} action={
          typeof onEdit === "function" ?
          <Tooltip title={editLabel}>
            <IconButton color="primary" size="small" aria-label={editLabel} onClick={onEdit}><EditIcon /></IconButton>
          </Tooltip>  : null}
        >
          {children}
        </Panel>
      </Col>
    </RowPanel>
  );
};

MatchPanel.propTypes = {
  title: PropTypes.string.isRequired,
  onEdit: PropTypes.func,
  editLabel: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default MatchPanel;