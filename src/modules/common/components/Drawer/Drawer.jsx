import * as React from "react";
import PropTypes from "prop-types";
import MuiDrawer from '@material-ui/core/Drawer';
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const DrawerWrapper = styled(MuiDrawer)`
  .MuiPaper-root {
    height: ${(props) => props.height ? props.height : "100%"};
  }
  .content {
    padding: 10px;
  }
`;

const Drawer = ({ title, height, children, visible, onHide, position = "bottom" }) => {
  return (
      <DrawerWrapper
        anchor={position}
        open={visible}
        onClose={onHide}
        height={height}
      >
        {title ? <Typography>{title}</Typography> : null}
        <div className="content">{children}</div>
    </DrawerWrapper>
  );
}

Drawer.propTypes = {
  title: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool.isRequired,
  onHide: PropTypes.func,
  position: PropTypes.oneOf(["top", "right", "bottom", "left"])
}

export default Drawer;