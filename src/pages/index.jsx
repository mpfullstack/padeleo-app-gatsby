import * as React from "react";
import { useIntl, navigate } from "gatsby-plugin-intl";
import { Provider, connect } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import { PersistGate } from "redux-persist/integration/react";
import IndexLayout from "../layouts";
import store, { persistor } from "../redux/store";
import Button from "../modules/common/components/Button";
import { createMatch } from "../features/matches/matchesSlice";
import theme from "../theme";

const mapStateToProps = () => {};
const mapDispatchToProps = { createMatch };

const Intro = connect(mapStateToProps, mapDispatchToProps)(
  ({ createMatch }) => {
    const intl = useIntl();
    return (
      <div>
        <h1>{intl.formatMessage({ id: "hiPadeleros" })}</h1>
        <p>{intl.formatMessage({ id: "createMathIntroduction" })}</p>
        <Button onClick={() => {
          createMatch();
          navigate(`/matches`)
        }}>
          {intl.formatMessage({ id: "createMatch" })}
        </Button>
      </div>
    );
  }
);

const IndexPage = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <IndexLayout>
            <Intro />
          </IndexLayout>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default IndexPage;
