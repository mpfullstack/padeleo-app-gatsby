import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from 'styled-components';
import Logo from "../modules/common/components/Logo";
import Drawer from "../modules/common/components/Drawer";

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

  const [visible, showSlider] = React.useState(false);

  return (
    <LayoutWrapper className='layout'>
      <Logo />
      <header>{data.site.siteMetadata.title}</header>
      <div className='layout-inner'>
        <main>{children}</main>
        <footer></footer>
      </div>
      <button onClick={() => showSlider(!visible)}>SHOW</button>
      <Drawer
        title="Drawer title"
        visible={visible}
        onHide={() => showSlider(!visible)}
      >
        <p>Some slider</p>
      </Drawer>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;