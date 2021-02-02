import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Container from "./Container";

const StyledHeader = styled.header`
  height: 200px;
  padding: 20px;
  background-color: #333;
  color: #fff;
`;

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

const HomepageLink = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <StyledHeader>
    <HeaderInner>
      <HomepageLink to="/">{title}</HomepageLink>
    </HeaderInner>
  </StyledHeader>
);

export default Header;
