import * as React from "react";
import { navigate } from "gatsby-plugin-intl";
import Menu from "./Menu";
import styled from "styled-components";
import { SettingsIcon } from "./Icon";

const StyledMenu = styled.div`
  margin-left: auto;
`;

const MainMenu = ({ options }) => {
  return (
    <StyledMenu>
      <Menu options={options} Icon={SettingsIcon} onClickMenu={() => {
        navigate("/settings")
      }} />
    </StyledMenu>
  )
}

export default MainMenu;