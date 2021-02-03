import * as React from "react";
import { render, screen } from "@testing-library/react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { IntlProvider } from "react-intl";
import en from "../../intl/en.json";
import IndexPage from "../index";

describe("Dummy test", () => {
  test("Dummy test", async () => {
    render(
      <IntlProvider locale="en" messages={en}>
        <IndexPage />
      </IntlProvider>
    );

    expect(await screen.findByText("Hi people")).toBeInTheDocument();
  });
});
