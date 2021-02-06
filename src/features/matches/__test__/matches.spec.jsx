import * as React from "react";
import { Provider } from "react-redux";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import store from "../../../redux/store";
import en from "../../../intl/en.json";
import CreateMatchPage from "../createMatchPage";

describe("Testing matches feature", () => {
  let component;

  beforeEach(() => {
    component = (
      <Provider store={store}>
        <IntlProvider locale="en" messages={en}>
          <CreateMatchPage />
        </IntlProvider>
      </Provider>
    );
  });

  test("Create match button to be in document", async () => {
    render(component);

    expect(await screen.findByText("Create the match")).toBeInTheDocument();
  });

  test("Create match button click shows the match form", async () => {
    render(component);

    fireEvent.click(await screen.findByText("Create the match"));

    await waitFor(() => {
      expect(screen.getByText(/Club/i)).toBeInTheDocument();
    });
  });
});