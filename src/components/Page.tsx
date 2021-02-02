import * as React from "react";
import styled from "styled-components";

const StyledPage = styled.div`
  display: block;
  flex: 1;
  position: relative;
  padding: 20px;
  margin-bottom: 3rem;
`;

interface PageProps {
  className?: string;
}

const Page: React.FC<PageProps> = ({ children, className }) => (
  <StyledPage className={className}>{children}</StyledPage>
);

export default Page;
