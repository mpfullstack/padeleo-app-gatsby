import * as React from "react";
import styled from "styled-components";
import { useIntl } from "gatsby-plugin-intl";
import { connect } from "react-redux";
import Button from "../../modules/common/components/Button";
import { createMatch, editMatch, matchesSelectors, deleteMatch, deletedMatch, selectTab } from "./matchesSlice";
import MatchDetail from "./matchDetail";
import MatchList from "../../modules/matches/components/MatchList";
import MatchesTabs from "../../modules/matches/components/MatchesTabs";
import Title from "../../modules/common/components/Title";

const mapDispatchToProps = { createMatch, editMatch, deleteMatch, deletedMatch, selectTab };
const mapStateToProps = ({ matches }) => {
  return {
    matches: matchesSelectors.selectByTab(matches, matches.tab),
    tab: matches.tab,
    match: matches.match,
    deleteMatchId: matches.deleting
  }
}

const MatchesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .create-match {
    align-self: center;
  }
`;

const Matches = ({
  createMatch, editMatch, match, matches, deletedMatch,
  deleteMatch, deleteMatchId, selectTab, tab
}) => {
  const intl = useIntl();

  if (match.id) {
    return <MatchDetail match={match} />;
  } else {
    return (
      <MatchesWrapper>
        <Title>{intl.formatMessage({ id: "myMatches" })}</Title>
        <MatchesTabs selected={tab} handleTabChange={selectTab} />
        <MatchList
          matches={matches}
          onEditMatch={editMatch}
          onDeleteMatch={deleteMatch}
          deleteMatchId={deleteMatchId}
          ondeletedMatch={deletedMatch} />
        <Button color="primary" className="create-match" onClick={() => {
          createMatch();
        }}>
          {intl.formatMessage({ id: "createMatch" })}
        </Button>
      </MatchesWrapper>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Matches);
