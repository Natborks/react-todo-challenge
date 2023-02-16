import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("renders learn react link", () => {
  render(<App />);
  const linkelement = screen.getByText("My Todo Application");
  expect(linkelement).toBeInTheDocument();
});

test("renders a button with a submit text", () => {
  render(<App />);
  const buttonElement = screen.getByText("Submit");
  expect(buttonElement).toBeInTheDocument();
});
