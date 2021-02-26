import * as React from "react";
import { useIntl } from "gatsby-plugin-intl";
import Tabs from "../../common/components/Tabs";
import styled from "styled-components";

const TabsWrapper = styled.div`
  margin-bottom: 10px;
`;

const MatchesTabs = ({ selected, handleTabChange }) => {
  const intl = useIntl();

  const options = [
    {
      key: "coming",
      label: intl.formatMessage({ id: "coming" })
    },
    {
      key: "past",
      label: intl.formatMessage({ id: "past" })
    },
    {
      key: "all",
      label: intl.formatMessage({ id: "all" })
    }
  ];

  return (
    <TabsWrapper>
      <Tabs options={options} selected={selected} handleTabChange={handleTabChange} />
    </TabsWrapper>
  );
}

export default MatchesTabs;