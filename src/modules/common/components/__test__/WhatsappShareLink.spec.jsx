import * as React from "react";
import { render, screen } from "@testing-library/react";
import WhatsappShareLink from "../WhatsappShareLink";

describe("Testing WhatsappShareLink component...", () => {
  let component;

  beforeEach(() => {
    component = (
      <WhatsappShareLink shareContent="I want to share this on whatsapp!">
        Share on Whatsapp!
      </WhatsappShareLink>
    );
  });

  test("Should include string 'Share on Whatsapp!' as children", async () => {
    render(component);

    expect(await screen.findByText("Share on Whatsapp!")).toBeInTheDocument();
  });

  test("Should open URL on click share button", async () => {
    render(component);

    expect(await screen.findByText("Share on Whatsapp!")).toHaveAttribute(
      "href",
      `https://wa.me/?text=${encodeURIComponent(
        "I want to share this on whatsapp!"
      )}`
    );
  });
});
