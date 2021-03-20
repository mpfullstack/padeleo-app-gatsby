import * as React from "react";
import { useIntl, navigate, Link } from "gatsby-plugin-intl";
import styled from "styled-components";
import { connect } from "react-redux";
import IndexLayout from "../layouts";
import Button from "../modules/common/components/Button";
import { createMatch } from "../features/matches/matchesSlice";
import check from "../images/check.png";
// import Helpers from "../helpers";

const mapStateToProps = () => ({});
const mapDispatchToProps = { createMatch };

const IntroWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 10px;
  padding-right: 15px;
  padding-left: 15px;
  .title {
    font-size: 20px;
  }
  .feature {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    padding-left: 25px;
    &::before {
      content: ' ';
      background: url(${check}) 0 0 no-repeat;
      position: absolute;
      left: 0;
      top: 30px;
      width: 32px;
      height: 32px;
    }
    .text {
      width: 85%;
      font-size: 18px;
    }
  }
  .create-match {
    margin-top: 30px;
    margin-bottom: 10px;
  }
  .my-matches {
    margin-top: 10px;
    color: ${props => props.theme.palette.primary.main};
    margin-bottom: 40px;
  }
`;

const Intro = connect(mapStateToProps, mapDispatchToProps)(
  ({ createMatch }) => {
    const intl = useIntl();
    return (
      <IntroWrapper>
        <h1 className="title">{intl.formatMessage({ id: "padelMatchManagement" })}</h1>
        <article className="feature">
          <p className="text">{intl.formatMessage({ id: "createMathIntroduction" })}</p>
        </article>
        <article className="feature">
          <p className="text">{intl.formatMessage({ id: "costManagementIntroduction" })}</p>
        </article>
        <article className="feature">
          <p className="text">{intl.formatMessage({ id: "calendarManagementIntroduction" })}</p>
        </article>
        <Button color="primary" className="create-match" onClick={() => {
          createMatch();
          navigate(`/matches`);
        }}>
          {intl.formatMessage({ id: "createMatch" })}
        </Button>
        <span>{intl.formatMessage({ id: "or" })}</span>
        <Link className="my-matches" to="/matches">{intl.formatMessage({ id: "goToYourMatches"})}</Link>
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
