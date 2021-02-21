import * as React from "react";
import { IconButton } from "../Icon";
import MuiMenu from "@material-ui/core/Menu";
import MuiMenuItem from "@material-ui/core/MenuItem";

const Menu = ({ Icon, onClickMenu, options = [] }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    if (options.length) {
      setAnchorEl(event.currentTarget);
    } else {
      onClickMenu(event);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="Menu"
        onClick={handleClick}
      >
        <Icon />
      </IconButton>
      {options.length ?
        <MuiMenu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: 300
            },
          }}
        >
          {options.map((option) => (
            <MuiMenuItem key={option} onClick={handleClose}>
              {option}
            </MuiMenuItem>
          ))}
        </MuiMenu> : null}
    </>
  );
}

export default Menu;
