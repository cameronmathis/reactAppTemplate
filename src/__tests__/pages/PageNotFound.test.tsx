import { render, screen } from "@testing-library/react";
import React from "react";

import PageNotFound from "../../pages/PageNotFound";

describe("PageNotFound", () => {
  it("renders PageNotFound", () => {
    render(<PageNotFound />);
  });

  it("renders the title", async () => {
    render(<PageNotFound />);
    const title = await screen.findByText("Page Not Found");
    expect(title).toBeInTheDocument();
  });

  it("renders the text", async () => {
    render(<PageNotFound />);
    const text = await screen.findByText(
      "Sorry, the requested page was not found."
    );
    expect(text).toBeInTheDocument();
  });
});
