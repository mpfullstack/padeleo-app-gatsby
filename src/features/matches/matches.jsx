import * as React from "react";
import styled from "styled-components";
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

const MatchesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .create-match {
    align-self: center;
  }
`;

const Matches = ({ createMatch, editMatch, match, matches }) => {
  const intl = useIntl();

  if (match.id >= 0) {
    return <MatchDetail match={match} />;
  } else {
    return (
      <MatchesWrapper>
        <MatchList matches={matches} onEditMatch={editMatch} />
        <Button color="secondary" className="create-match" onClick={() => {
          createMatch();
        }}>
          {intl.formatMessage({ id: "createMatch" })}
        </Button>
      </MatchesWrapper>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Matches);
