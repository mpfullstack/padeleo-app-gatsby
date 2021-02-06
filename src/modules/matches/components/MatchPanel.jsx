import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { IconButton, EditIcon } from "../../common/components/Icon";
import Panel from "../../common/components/Panel";
import { Row, Col } from "../../common/components/Layout";

const RowPanel = styled(Row)`
  margin: 10px 0;
`;

const MatchPanel = ({ title, onEdit, children }) => {
  return (
    <RowPanel>
      <Col>
        <Panel title={title}>
          {typeof onEdit === "function" ?
            <IconButton onClick={onEdit}><EditIcon /></IconButton> : null}
          {children}
        </Panel>
      </Col>
    </RowPanel>
  );
};

MatchPanel.propTypes = {
  title: PropTypes.string.isRequired,
  onEdit: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default MatchPanel;