import { render, screen } from "@testing-library/react";
import React from "react";

import Footer from "../../components/Footer";

describe("Footer", () => {
  it("renders Footer", () => {
    render(<Footer />);
  });

  it("renders the icon button", async () => {
    render(<Footer />);
    const iconButton = await screen.findByTestId("icon-btn");
    expect(iconButton).toBeInTheDocument();
  });
});
