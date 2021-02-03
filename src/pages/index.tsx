import * as React from "react";
import { useIntl } from "gatsby-plugin-intl";
import Page from "../components/Page";
import Container from "../components/Container";
import IndexLayout from "../layouts";
import WhatsappShareButton from "../modules/common/components/WhatsappShareButton";

const IndexPage: React.FC = () => {
  const intl = useIntl();

  const clubName = "Partido+en+Montgat+Padel";
  const clubUrl = "https%3A%2F%2Fgoo.gl%2Fmaps%2FjCHX9hiu8FBHMAjH8";
  const matchDate = "Martes+02%2F02";
  const matchTime = "19%3A00h+a+20%3A30h";
  const p1 = "Marc";
  const p2 = "Dani";
  const p3 = "Tomas";
  const p4 = "%3F";
  let template = `${clubName}%0D%0A%0D%0A${clubUrl}%0D%0A%0D%0A%F0%9F%93%85${matchDate}%0D%0A%F0%9F%95%92${matchTime}`;
  template += `%0D%0A%0D%0A%F0%9F%8E%BE+${p1}%0D%0A%F0%9F%8E%BE+${p2}%0D%0A%F0%9F%8E%BE+${p3}+%0D%0A%F0%9F%8E%BE+${p4}`;

  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>{intl.formatMessage({ id: "hiPeople" })}</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <WhatsappShareButton shareContent={template} encode={false}>
            Share on Whatsapp!
          </WhatsappShareButton>
        </Container>
      </Page>
    </IndexLayout>
  );
};

export default IndexPage;
