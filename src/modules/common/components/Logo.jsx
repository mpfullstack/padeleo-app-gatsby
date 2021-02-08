import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo-padeleo.png" }) {
        childImageSharp {
          fixed(width: 180, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <LogoWrapper>
      <Img fixed={data.placeholderImage.childImageSharp.fixed} />
    </LogoWrapper>
  );
}

export default Logo;