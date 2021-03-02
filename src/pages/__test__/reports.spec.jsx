import * as React from "react";
import { Provider } from "react-redux";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { IntlContextProvider } from "gatsby-plugin-intl";
import { IntlProvider } from "react-intl";
import { ThemeProvider as StyledThemeProvider} from "styled-components";
import theme from "../../theme";
import store from "../../redux/store";
import es from "../../intl/es.json";
import Reports from "../reports";

describe("Testing reports feature", () => {
  let component;

  beforeEach(() => {
    component = (
      <Provider store={store}>
        <StyledThemeProvider theme={theme}>
          <IntlProvider locale="es" messages={es}>
            <IntlContextProvider value={{ language: "es", routed: true }}>
              <Reports />
            </IntlContextProvider>
          </IntlProvider>
        </StyledThemeProvider>
      </Provider>
    );
  });

  test("Dates filter filter to be in document", async () => {
    render(component);

    expect(await screen.findByText("Fecha inicial")).toBeInTheDocument();
    expect(await screen.findByText("Fecha final")).toBeInTheDocument();
  });
});
