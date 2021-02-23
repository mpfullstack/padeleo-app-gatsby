import * as React from "react";
import { navigate } from "gatsby-plugin-intl";
import Menu from "./Menu";
import styled from "styled-components";
import { CloseIcon, SettingsIcon } from "./Icon";

const StyledMenu = styled.div`
  margin-left: auto;
`;

const MainMenu = ({ path }) => {
  let Icon = SettingsIcon;
  let navigateTo = "/settings";
  if (String(path).indexOf("settings") !== -1) {
    Icon = CloseIcon;
    navigateTo = "/matches";
  }
  return (
    <StyledMenu>
      <Menu Icon={Icon} onClickMenu={() => {
        navigate(navigateTo);
      }} />
    </StyledMenu>
  )
}

export default MainMenu;