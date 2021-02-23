import * as React from "react";
import IndexLayout from "../layouts";
import Settings from "../features/settings";

const SettingsPage = () => {
  return (
    <IndexLayout smallLogo={true} withMenu={true}>
      <Settings />
    </IndexLayout>
  );
};

export default SettingsPage;
