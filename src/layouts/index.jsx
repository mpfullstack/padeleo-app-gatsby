import * as React from "react";
import PropTypes from "prop-types";
import { useIntl } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby";
import styled from 'styled-components';
import SEO from "./Seo";
import Logo from "../modules/common/components/Logo";

const LayoutWrapper = styled.div`
  width: 100%;
  .layout-inner {
    margin: 10px auto 0 auto;
    padding: 10px 0;
    max-width: 520px;
    width: 100%;
    /* -webkit-box-shadow: 0px 3px 5px 0px rgba(50, 50, 50, 0.75);
    -moz-box-shadow:    0px 3px 5px 0px rgba(50, 50, 50, 0.75);
    box-shadow:         0px 3px 5px 0px rgba(50, 50, 50, 0.75); */
  }
`;

const Header = styled.header`
  max-width: 520px;
  width: 96%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Layout = ({ children, renderMenu, smallLogo = false }) => {
  const intl = useIntl();

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
      <SEO title={intl.formatMessage({ id: "padel"})} />
      <Header>
        <Logo small={smallLogo} />
        <h1 style={{ display: "none" }}>{intl.formatMessage({ id: data.site.siteMetadata.title})}</h1>
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