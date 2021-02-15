import * as React from "react";
import { useIntl } from "gatsby-plugin-intl";
import { connect } from "react-redux";
import Button from "../../modules/common/components/Button";
import { createMatch, editMatch, matchesSelectors } from "./matchesSlice";
import MatchDetail from "./matchDetail";
import MatchList from "../../modules/matches/components/MatchList";

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
        <MatchList matches={matches} onEditMatch={editMatch} />
        <Button color="secondary" onClick={() => {
          createMatch();
        }}>
          {intl.formatMessage({ id: "createMatch" })}
        </Button>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Matches);
