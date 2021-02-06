import * as React from "react";
import PropTypes from "prop-types";
import UIDrawer from '@material-ui/core/Drawer';
import styled from "styled-components";

const DrawerWrapper = styled(UIDrawer)`
  .MuiPaper-root {
    height: 40vh;
  }
`;

const Drawer = ({ children, visible, onHide, position = "bottom" }) => {
  return (
      <DrawerWrapper
        anchor={position}
        open={visible}
        onClose={onHide}
      >
        {children}
    </DrawerWrapper>
  );
}

Drawer.propTypes = {
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool.isRequired,
  onHide: PropTypes.func,
  position: PropTypes.oneOf(["top", "right", "bottom", "left"])
}

export default Drawer;