
import * as React from "react";
import { connect } from "react-redux";
import { editMatch, matchesSelectors } from "./matchesSlice";

const mapDispatchToProps = { editMatch };
const mapStateToProps = ({ matches }) => {
  return {
    matches: matchesSelectors.selectAll(matches),
    editMatchId: matches.editMatchId,
  }
}

const MatchEditPage = ({ matches, editMatch }) => {
  // const intl = useIntl();
  React.useEffect(() => {
    if (matches.length === 0) {
      // Create a new match
      editMatch({ id: 0 });
    }
  }, [matches, editMatch]);

  return (
    <div>
      {}
    </div>
  );
};


export default connect(mapStateToProps, mapDispatchToProps)(MatchEditPage);
