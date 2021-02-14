import * as React from "react";
import { useIntl } from "gatsby-plugin-intl";
import { Provider, connect } from "react-redux";
import styled from "styled-components";
import { ThemeProvider } from '@material-ui/core/styles';
import { PersistGate } from "redux-persist/integration/react";
import IndexLayout from "../layouts";
import store, { persistor } from "../redux/store";
import Matches from "../features/matches";
import { closeMatch } from "../features/matches/matchesSlice";
import theme from "../theme";
import Button from "../modules/common/components/Button";

const mapDispatchToProps = { closeMatch };
const StyledMenu = styled.div`
  margin-left: auto;
`;
const Menu = connect(null, mapDispatchToProps)(
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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <IndexLayout smallLogo={true} renderMenu={() => <Menu />}>
            <Matches />
          </IndexLayout>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default MatchesPage;
