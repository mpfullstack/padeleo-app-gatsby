import * as React from "react";
import IndexLayout from "../layouts";
import Matches from "../features/matches";

const MatchesPage = (props) => {
  return (
    <IndexLayout smallLogo={true} withBreadcrumb={true} withMenu={true} path={props.path} >
      <Matches />
    </IndexLayout>
  );
};

export default MatchesPage;
