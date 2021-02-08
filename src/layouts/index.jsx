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

const Layout = ({ children }) => {
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
      <Logo />
      {/* <header>{data.site.siteMetadata.title}</header> */}
      <div className='layout-inner'>
        <main>{children}</main>
        <footer></footer>
      </div>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;