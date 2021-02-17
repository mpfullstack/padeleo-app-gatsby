import * as React from "react";
import { useIntl } from "gatsby-plugin-intl";
import styled from "styled-components";
import IndexLayout from "../layouts";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

// const Title = styled.h1`
//   font-size: 22px;
// `;

const SubTitle = styled.h2`
  font-size: 18px;
`;

const Text = styled.p`
  font-size: 16px;
  margin: 3px 0;
  line-height: 1.5;
`;

const LegalAdvicePage = () => {
  const intl = useIntl();
  return (
    <IndexLayout>
      <Wrapper>
        {/* <Title>Aviso legal</Title>
        <SubTitle>Datos del titular</SubTitle>
        <Text>
          <strong>Titular</strong><br />Marc Pérez Castells
        </Text>
        <Text>
          <strong>NIF</strong><br />53083537C
        </Text>
        <Text>
          <strong>Domicilio</strong><br />Calle Roma 54, 08921 Santa Coloma de Gramenet, Barcelona
        </Text>
        <Text>
          <strong>Correo electrónico</strong><br /><a href="mailto:info@marcperez.cat">info@marcperez.cat</a>
        </Text>
        <Text>
          <strong>Teléfono</strong><br />93 391 59 76
        </Text> */}

        <SubTitle id="cookies-policy">{intl.formatMessage({ id: "cookiesPolicy" })}</SubTitle>
        <Text>
          <strong>{intl.formatMessage({ id: "whatAreCookies" })}</strong><br />
          {intl.formatMessage({ id: "cookiesExplanation" })}<br /><br />
        </Text>

        <SubTitle>{intl.formatMessage({ id: "cookiesWeUse" })}</SubTitle>
        <Text><strong>Cookie</strong><br />Google Analytics</Text>
        <Text>
          <strong>{intl.formatMessage({ id: "collectedData" })}</strong><br />
          {intl.formatMessage({ id: "collectedDataExplanation" })}
        </Text>
        <Text><strong>{intl.formatMessage({ id: "purpose" })}</strong><br />{intl.formatMessage({ id: "purposeExplanation" })}</Text>
        <Text><strong>{intl.formatMessage({ id: "periodOfValidity" })}</strong><br />{intl.formatMessage({ id: "periodOfValidityExplanation" })}</Text>
      </Wrapper>
    </IndexLayout>
  );
};

export default LegalAdvicePage;
