import * as React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from '@material-ui/core/styles';
import { PersistGate } from "redux-persist/integration/react";
import IndexLayout from "../layouts";
import store, { persistor } from "../redux/store";
import CreateMatchPage from "../features/matches/createMatchPage";
import theme from "../theme";

const IndexPage = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <IndexLayout>
            <CreateMatchPage />
          </IndexLayout>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default IndexPage;
