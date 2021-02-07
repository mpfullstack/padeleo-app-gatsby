import * as React from "react";
import PropTypes from "prop-types";
import UIDrawer from '@material-ui/core/Drawer';
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const DrawerWrapper = styled(UIDrawer)`
  .MuiPaper-root {
    height: 40vh;
  }
`;

const Drawer = ({ title, children, visible, onHide, position = "bottom" }) => {
  return (
      <DrawerWrapper
        anchor={position}
        open={visible}
        onClose={onHide}
      >
        <Typography>{title}</Typography>
        {children}
    </DrawerWrapper>
  );
}

Drawer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool.isRequired,
  onHide: PropTypes.func,
  position: PropTypes.oneOf(["top", "right", "bottom", "left"])
}

export default Drawer;