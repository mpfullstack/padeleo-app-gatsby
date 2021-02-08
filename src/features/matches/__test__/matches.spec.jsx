import * as React from "react";
import { Provider } from "react-redux";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import store from "../../../redux/store";
import es from "../../../intl/es.json";
import Matches from "../matches";

describe("Testing matches feature", () => {
  let component;

  beforeEach(() => {
    component = (
      <Provider store={store}>
        <IntlProvider locale="es" messages={es}>
          <Matches />
        </IntlProvider>
      </Provider>
    );
  });

  test("Create match button to be in document", async () => {
    render(component);

    expect(await screen.findByText("Crea tu partido")).toBeInTheDocument();
  });

  test("Expect click on create match button to show the match form", async () => {
    render(component);

    fireEvent.click(await screen.findByText("Crea tu partido"));

    await waitFor(() => {
      expect(screen.getByText(/Club/i)).toBeInTheDocument();
    });
  });

  test("Expect the club's name to be updated correctly", async () => {
    render(component);

    // Open panel to edit club's name
    fireEvent.click(await screen.getByRole('button', {
      name: /Editar club/i
    }));
    await waitFor(() => {
      expect(screen.getAllByText(/Nombre del club/i)[0]).toBeInTheDocument();
    });

    // Update input club's name field value
    const input = screen.getByLabelText("Nombre del club");
    fireEvent.change(input, { target: { value: 'Montgat Padel La Riera' } })
    // Click on save button
    fireEvent.click(await screen.getByRole('button', {
      name: /Guardar/i
    }));

    // Check club's name is updated correctly
    await waitFor(() => {
      expect(screen.getByText('Montgat Padel La Riera')).toBeInTheDocument();
    });
  });
});
