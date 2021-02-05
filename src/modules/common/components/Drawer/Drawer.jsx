import * as React from "react";
import PropTypes from "prop-types";
import { Drawer as RSDrawer } from "rsuite";

const Drawer = ({ children, title, visible, onHide }) => {
  return (
      <RSDrawer
        placement={"bottom"}
        show={visible}
        onHide={onHide}
      >
        <RSDrawer.Header>
          <RSDrawer.Title>{title}</RSDrawer.Title>
        </RSDrawer.Header>
        <RSDrawer.Body>
          {children}
        </RSDrawer.Body>
        <RSDrawer.Footer>
        </RSDrawer.Footer>
    </RSDrawer>
  );
}

Drawer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Drawer;