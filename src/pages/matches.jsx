import * as React from "react";
import IndexLayout from "../layouts";
import Matches from "../features/matches";

const MatchesPage = () => {
  return (
    <IndexLayout smallLogo={true} withBreadcrumb={true} withMenu={true}>
      <Matches />
    </IndexLayout>
  );
};

export default MatchesPage;
