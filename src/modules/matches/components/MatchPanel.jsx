import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { IconButton, EditIcon } from "../../common/components/Icon";
import Panel from "../../common/components/Panel";
import { Row, Col } from "../../common/components/Layout";
import Tooltip from "../../common/components/Tooltip";

const RowPanel = styled(Row)`
  margin: 10px 0;
`;

const MatchPanel = ({ title, onEdit, editLabel = "Edit", children }) => {
  return (
    <RowPanel>
      <Col>
        <Panel title={title}>
          {typeof onEdit === "function" ?
            <Tooltip title={editLabel}>
              <IconButton aria-label={editLabel} onClick={onEdit}><EditIcon /></IconButton>
            </Tooltip>  : null}
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