import * as React from "react";
import styled from "styled-components";
import { IconButton, Icon } from "../../common/components/Icon";
import Panel from "../../common/components/Panel";
import { Row, Col } from "../../common/components/Layout";

const RowPanel = styled(Row)`
  margin-bottom: 20px;
`;

const MatchPanel = ({ title, onClick, children }) => {
  return (
    <RowPanel gutter={16}>
      <Col>
        <Panel header={title} bordered>
          {typeof onClick === "function" ?
            <IconButton
              icon={<Icon icon='edit2' size="3x" />}
              onClick={onClick} /> : null}
          {children}
        </Panel>
      </Col>
    </RowPanel>
  );
};

export default MatchPanel;