import * as React from "react";
import { useIntl, navigate } from "gatsby-plugin-intl";
import styled from "styled-components";
import { connect } from "react-redux";
import IndexLayout from "../layouts";
import Button from "../modules/common/components/Button";
import { createMatch } from "../features/matches/matchesSlice";
// import Helpers from "../helpers";

const mapStateToProps = () => ({});
const mapDispatchToProps = { createMatch };

const IntroWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 40px;
  .text {
    width: 85%;
    font-size: 22px;
    text-align: center;
  }
`;

const Intro = connect(mapStateToProps, mapDispatchToProps)(
  ({ createMatch }) => {
    const intl = useIntl();
    return (
      <IntroWrapper>
        <h1>{intl.formatMessage({ id: "hiPadeleros" })}</h1>
        <p className="text">{intl.formatMessage({ id: "createMathIntroduction" })}</p>
        <Button color="secondary" className="create-match" onClick={() => {
          createMatch();
          navigate(`/matches`);
        }}>
          {intl.formatMessage({ id: "createMatch" })}
        </Button>
      </IntroWrapper>
    );
  }
);


const IndexPage = () => {
  return (
    <IndexLayout>
      <Intro />
    </IndexLayout>
  );
};

export default IndexPage;
