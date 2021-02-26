import * as React from "react";
import { useIntl } from "gatsby-plugin-intl";
import styled from "styled-components";
import IndexLayout from "../layouts";

const FeedbackWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 40px;
  .text {
    width: 85%;
    font-size: 18px;
    text-align: center;
    a {
      color: ${props => props.theme.palette.primary.main};
    }
  }
`;

const FeedbackPage = () => {
  const intl = useIntl();

  return (
    <IndexLayout>
      <FeedbackWrapper>
        <h1>{intl.formatMessage({ id: "Feedback" })}</h1>
        <p className="text">{intl.formatMessage({ id: "feedbackIntroduction1" })}</p>
        <p className="text">{intl.formatMessage({ id: "feedbackIntroduction2" })}{` `}<a href="mailto:info@marcperez.cat">info@marcperez.cat</a></p>
      </FeedbackWrapper>
    </IndexLayout>
  );
};

export default FeedbackPage;
