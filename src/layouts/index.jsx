import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  .layout-inner {
    margin: 55px auto 0 auto;
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
      <header>{data.site.siteMetadata.title}</header>
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