/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import * as React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import store, { persistor } from "./src/redux/store";
import theme from "./src/theme";
import { PersistGate } from "redux-persist/integration/react";

import "./src/styles/global.css";

// Wraps every page in a component
export const wrapPageElement = ({ element }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          {element}
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
