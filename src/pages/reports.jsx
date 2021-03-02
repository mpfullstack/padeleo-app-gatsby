import * as React from "react";
import IndexLayout from "../layouts";
import Reports from "../features/reports";

const ReportsPage = (props) => {
  return (
    <IndexLayout smallLogo={true} withMenu={true} path={props.path} >
      <Reports />
    </IndexLayout>
  );
};

export default ReportsPage;
