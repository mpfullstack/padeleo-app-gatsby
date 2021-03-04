import * as React from "react";
import { useIntl } from "gatsby-plugin-intl";
import { navigate } from "gatsby-plugin-intl";
import Menu from "./Menu";
import styled from "styled-components";
import { MenuIcon, SettingsIcon, AssignmentIcon, EventIcon } from "./Icon";
import Drawer from "./Drawer";
import List, {
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText
} from "./List";

const StyledMenu = styled.div`
  margin-left: auto;
`;

const MenuOptions = ({ options, toggleMenu }) => {
  return (
    <List>
      {options.map((option) => (
        <ListItem button key={option.key} onClick={() => {
          toggleMenu(false);
          setTimeout(() => navigate(`/${option.key}`, 50));
        }}>
          <ListItemIcon>{option.icon}</ListItemIcon>
          <ListItemText primary={option.name} />
        </ListItem>
      ))}
    </List>
  );
}

const MainMenu = () => {
  const intl = useIntl();

  const [visible, toggleMenu] = React.useState(false);

  const mainOptions = [
    {
      key: "matches",
      name: intl.formatMessage({ id: "myMatches" }),
      icon: <EventIcon />
    },
    {
      key: "reports",
      name: intl.formatMessage({ id: "statistics" }),
      icon: <AssignmentIcon />
    }
  ];

  const secondaryOptions = [
    {
      key: "settings",
      name: intl.formatMessage({ id: "settings" }),
      icon: <SettingsIcon />
    }
  ];

  return (
      <StyledMenu>
        <Menu Icon={MenuIcon} onClickMenu={() => toggleMenu(true)} />
        <Drawer
          visible={visible}
          position="right"
          onHide={() => toggleMenu(false)}
          >
          <MenuOptions options={mainOptions} toggleMenu={toggleMenu} />
          <Divider />
          <MenuOptions options={secondaryOptions} toggleMenu={toggleMenu} />
        </Drawer>
    </StyledMenu>
  )
}

export default MainMenu;