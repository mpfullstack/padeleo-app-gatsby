/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import * as React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import store from "./src/redux/store";
import theme from "./src/theme";

// Wraps every page in a component
export const wrapPageElement = ({ element }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {element}
      </ThemeProvider>
    </Provider>
  );
}
