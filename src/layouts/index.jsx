import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from 'styled-components';
import Logo from "../modules/common/components/Logo";

const LayoutWrapper = styled.div`
  width: 96%;
  margin: 0 auto;
  .layout-inner {
    margin: 10px auto 0 auto;
    padding-top: 10px;
    max-width: 1200px;
    width: 100%;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Layout = ({ children, renderMenu, smallLogo = false }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <LayoutWrapper className='layout'>
      <Header>
        <Logo small={smallLogo} />
        <h1 style={{display: "none"}}>{data.site.siteMetadata.title}</h1>
        {typeof renderMenu === "function" ? renderMenu() : null}
      </Header>
      <div className='layout-inner'>
        <main>{children}</main>
        <footer></footer>
      </div>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  smallLogo: PropTypes.bool,
  renderMenu: PropTypes.func
}

export default Layout;