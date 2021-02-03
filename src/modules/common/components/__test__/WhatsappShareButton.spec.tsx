import * as React from "react";
import { render, screen } from "@testing-library/react";
import WhatsappShareButton from "../WhatsappShareButton";

describe("Testing WhatsappShareButton component...", () => {
  let component: React.ReactElement;

  beforeEach(() => {
    component = (
      <WhatsappShareButton shareContent="I want to share this on whatsapp!">
        Share on Whatsapp!
      </WhatsappShareButton>
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
