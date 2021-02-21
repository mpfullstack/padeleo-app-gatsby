import * as React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useIntl, Link } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby";
import styled from 'styled-components';
import SEO from "./Seo";
import { closeMatch } from "../features/matches/matchesSlice";
import Logo from "../modules/common/components/Logo";
import CookiesAlert from "../modules/common/components/CookiesAlert";
import MainMenu from "../modules/common/components/MainMenu";

const LayoutWrapper = styled.div`
  width: 100%;
  .layout-inner {
    margin: 10px auto 0 auto;
    padding: 0 0 10px 0;
    max-width: 520px;
    width: 96%;
    main {
      min-height: 65vh;
    }
  }
`;

const Header = styled.header`
  max-width: 520px;
  width: 96%;
  margin: 10px auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &.with-menu {
    justify-content: flex-start;
  }
`;

const Footer = styled.footer`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    font-size: 14px;
    color: ${props => props.theme.palette.primary.main};
    margin: 0 10px;
  }
`;

const mapStateToProps = () => ({});
const mapDispatchToProps = { closeMatch };

const Breadcrumb = connect(mapStateToProps, mapDispatchToProps)(
  ({ closeMatch }) => {
    const intl = useIntl();
    return (
      <p>
        <Link to="/matches" onClick={() => closeMatch()}>
          {intl.formatMessage({ id: "myMatches" })}
        </Link>
      </p>
    );
  }
);

const Layout = ({ children, withBreadcrumb = false, withMenu = false, smallLogo = false }) => {
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
      <Header className={withMenu ? "with-menu" : ""}>
        <Logo small={smallLogo} />
        <h1 style={{ display: "none" }}>{intl.formatMessage({ id: data.site.siteMetadata.title})}</h1>
        {withMenu ? <MainMenu /> : null}
      </Header>
      <div className='layout-inner'>
        {withBreadcrumb ? <Breadcrumb /> : null}
        <main>{children}</main>
      </div>
      <Footer className='layout-inner'>
        {/* <Link to="/legal_advice">{intl.formatMessage({ id: "legalAdvice" })}</Link> */}
        <Link to="/legal_advice">{intl.formatMessage({ id: "cookiesPolicy" })}</Link>
        <a href={`https://marcperez.cat/${intl.locale}/`}>{intl.formatMessage({ id: "credits" })}</a>
      </Footer>
      <CookiesAlert />
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  smallLogo: PropTypes.bool,
  renderMenu: PropTypes.func
}

export default Layout;