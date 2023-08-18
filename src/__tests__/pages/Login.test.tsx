import { render, screen } from "@testing-library/react";
import React from "react";

import Login from "../../pages/Login";

describe("Login", () => {
  it("renders Login", () => {
    render(<Login />);
  });

  it("renders the login button", async () => {
    render(<Login />);
    const loginButton = await screen.findByRole("button");
    expect(loginButton).toBeInTheDocument();
  });
});
