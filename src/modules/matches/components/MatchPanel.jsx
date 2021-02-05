import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { IconButton, Icon } from "../../common/components/Icon";
import Panel from "../../common/components/Panel";
import { Row, Col } from "../../common/components/Layout";

const RowPanel = styled(Row)`
  margin: 10px 0;
`;

const MatchPanel = ({ title, onEdit, children }) => {
  return (
    <RowPanel gutter={16}>
      <Col>
        <Panel header={title} bordered>
          {typeof onEdit === "function" ?
            <IconButton
              icon={<Icon icon='edit2' size="3x" />}
              onClick={onEdit} /> : null}
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