import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import App from "../App";

describe("<App />", () => {
  test("should render", () => {
    const { getByText } = render(<App />);
    expect(getByText("Technical Interview")).toBeDefined();
  });

  test("should add an item to the list", () => {
    const user = userEvent.setup();

    render(<App />);

    const form = screen.getByRole("form");
    expect(form).toBeDefined();
  });
});
