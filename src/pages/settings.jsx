import * as React from "react";
import IndexLayout from "../layouts";
import Settings from "../features/settings";

const SettingsPage = (props) => {
  return (
    <IndexLayout smallLogo={true} withMenu={true} path={props.path} >
      <Settings />
    </IndexLayout>
  );
};

export default SettingsPage;
