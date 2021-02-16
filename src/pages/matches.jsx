import * as React from "react";
import { useIntl } from "gatsby-plugin-intl";
import { connect } from "react-redux";
import styled from "styled-components";
import { ThemeProvider } from '@material-ui/core/styles';
import IndexLayout from "../layouts";
import Matches from "../features/matches";
import { closeMatch } from "../features/matches/matchesSlice";
import theme from "../theme";
import Button from "../modules/common/components/Button";

const mapStateToProps = () => ({});
const mapDispatchToProps = { closeMatch };
const StyledMenu = styled.div`
  margin-left: auto;
`;
const Menu = connect(mapStateToProps, mapDispatchToProps)(
  ({ closeMatch }) => {
    const intl = useIntl();
    return (
      <StyledMenu>
        <Button onClick={() => closeMatch()} variant="text">
          {intl.formatMessage({ id: "myMatches" })}
        </Button>
      </StyledMenu>
    );
  }
);

const MatchesPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <IndexLayout smallLogo={true} renderMenu={() => <Menu />}>
        <Matches />
      </IndexLayout>
    </ThemeProvider>
  );
};

export default MatchesPage;
