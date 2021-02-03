import * as React from "react";
import { render, screen } from "@testing-library/react";
import IndexPage from "../index";

// const Test = () => <p>Hola</p>;

describe("Dummy test", () => {
  test("Dummy test", async () => {
    render(<IndexPage />);

    expect(await screen.findByText("Hi people")).toBeInTheDocument();
  });
});
