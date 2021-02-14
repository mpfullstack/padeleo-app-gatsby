import * as React from "react";
import { useIntl } from "gatsby-plugin-intl";
import { connect } from "react-redux";
// import WhatsappShareLink from "../modules/common/components/WhatsappShareLink";
import Button from "../../modules/common/components/Button";
import { createMatch, editMatch, matchesSelectors } from "./matchesSlice";
import MatchDetail from "./matchDetail";

const mapDispatchToProps = { createMatch, editMatch };
const mapStateToProps = ({ matches }) => {
  return {
    matches: matchesSelectors.selectAll(matches),
    match: matches.match,
  }
}

const Matches = ({ createMatch, editMatch, match, matches }) => {
  const intl = useIntl();

  if (match.id >= 0) {
    return <MatchDetail match={match} />;
  } else {
    return (
      <div>
        {matches.length ?
          matches.map((match) => {
            return (
              <Button onClick={() => editMatch(match)}><p>{match.clubName}</p></Button>
            );
          }) : null}
        <Button onClick={() => {
          createMatch();
        }}>
          {intl.formatMessage({ id: "createMatch" })}
        </Button>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Matches);
