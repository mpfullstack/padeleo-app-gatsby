import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby-plugin-intl";
import styled from "styled-components";
import Img from "gatsby-image";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ small }) => small ? "0px" : "20px"};
  justify-content: ${({ small }) => small ? "flex-start" : "center"};
`;

const Logo = ({ small }) => {
  const data = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "logo-padeleo.png" }) {
        childImageSharp {
          fixed(width: 140, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logoSymbol: file(relativePath: { eq: "logo-padeleo-symbol.png" }) {
        childImageSharp {
          fixed(width: 35, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <LogoWrapper small={small}>
      <Link to="/">
        {small ?
          <Img fixed={data.logoSymbol.childImageSharp.fixed} />
          :
          <Img fixed={data.logoImage.childImageSharp.fixed} />
        }
      </Link>
    </LogoWrapper>
  );
}

export default Logo;