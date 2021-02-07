import * as React from "react";
import { Provider } from "react-redux";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import store from "../../../redux/store";
import es from "../../../intl/es.json";
import CreateMatchPage from "../createMatchPage";

describe("Testing matches feature", () => {
  let component;

  beforeEach(() => {
    component = (
      <Provider store={store}>
        <IntlProvider locale="es" messages={es}>
          <CreateMatchPage />
        </IntlProvider>
      </Provider>
    );
  });

  test("Create match button to be in document", async () => {
    render(component);

    expect(await screen.findByText("Crea tu partido")).toBeInTheDocument();
  });

  test("Create match button click shows the match form", async () => {
    render(component);

    fireEvent.click(await screen.findByText("Crea tu partido"));

    await waitFor(() => {
      expect(screen.getByText(/Club/i)).toBeInTheDocument();
    });
  });

  test("Click on edit club button shows panel to edit the club's name", async () => {
    render(component);

    fireEvent.click(await screen.getByRole('button', {
      name: /Editar club/i
    }));

    await waitFor(() => {
      expect(screen.getByText(/Nombre del club/i)).toBeInTheDocument();
    });
  });
});
