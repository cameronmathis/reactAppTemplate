import { render, screen } from "@testing-library/react";
import React from "react";

import NotLoggedIn from "../../pages/NotLoggedIn";

describe("NotLoggedIn", () => {
  it("renders NotLoggedIn", () => {
    render(<NotLoggedIn />);
  });

  it("renders the title", async () => {
    render(<NotLoggedIn />);
    const title = await screen.findByText("Not Logged In");
    expect(title).toBeInTheDocument();
  });

  it("renders the text", async () => {
    render(<NotLoggedIn />);
    const text = await screen.findByText("Please log in to view this page.");
    expect(text).toBeInTheDocument();
  });
});
