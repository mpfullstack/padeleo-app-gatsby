
import * as React from "react";
import { connect } from "react-redux";
import { editMatch, MatchesState, matchesSelectors } from "./matchesSlice";

const mapDispatchToProps = { editMatch };
const mapStateToProps = ({ matches }: { matches: MatchesState }) => {
  debugger;
  return {
    matches: matchesSelectors.selectAll(matches),
    editMatchId: matches.editMatchId,
  }
}

const MatchEditPage: React.FC = ({ matches, editMatch }) => {
  // const intl = useIntl();
  React.useEffect(() => {
    if (matches.length === 0) {
      // Create a new match
      editMatch({ id: 0 });
    }
  }, [matches]);

  return (
    <div>
      {}
    </div>
  );
};


export default connect(mapStateToProps, mapDispatchToProps)(MatchEditPage);
