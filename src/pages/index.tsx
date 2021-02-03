import * as React from "react";
import { useIntl } from "gatsby-plugin-intl";
// import { injectIntl } from "gatsby-plugin-intl"
import Page from "../components/Page";
import Container from "../components/Container";
import IndexLayout from "../layouts";

const IndexPage: React.FC = () => {
  const intl = useIntl();

  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>{intl.formatMessage({ id: "hiPeople" })}</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
        </Container>
      </Page>
    </IndexLayout>
  );
};

export default IndexPage;
