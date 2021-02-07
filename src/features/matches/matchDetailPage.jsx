import * as React from "react";
import { useIntl } from "gatsby-plugin-intl";
import { connect } from "react-redux";
// import WhatsappShareLink from "../modules/common/components/WhatsappShareLink";
import Button from "../../modules/common/components/Button";
import { createMatch, matchesSelectors } from "./matchesSlice";
import MatchForm from "./matchForm";

const mapDispatchToProps = { createMatch };
const mapStateToProps = ({ matches }) => {
  return {
    matches: matchesSelectors.selectAll(matches),
    match: matches.match,
  }
}

const MatchDetailPage = ({ createMatch, match }) => {
  const intl = useIntl();

  if (match.id >= 0) {
    return <MatchForm match={match} />;
  } else {
    return (
      <div>
        <h1>{intl.formatMessage({ id: "hiPadeleros" })}</h1>
          <p>{intl.formatMessage({ id: "createMathIntroduction" })}</p>
          {/* <WhatsappShareLink shareContent={template} encode={false}>
            Share on Whatsapp!
          </WhatsappShareLink> */}
          <Button onClick={() => createMatch()}>
            {intl.formatMessage({ id: "createMatch" })}
          </Button>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MatchDetailPage);
