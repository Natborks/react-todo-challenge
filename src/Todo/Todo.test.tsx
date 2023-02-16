import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./Todo";

describe("Todo Application", () => {
  it("rendeds input for todo", () => {
    render(<Todo />);

    const inputElement = screen.getByTestId("todo-input");
    expect(inputElement).toBeInTheDocument();
  });
  it("adds a todo item to the list", () => {
    render(<Todo />);

    const inputElement = screen.getByTestId("todo-input");
    userEvent.type(inputElement, "buy some milk");
    userEvent.type(inputElement, "{enter}");

    expect(screen.getByText("buy some milk")).toBeInTheDocument();
  });
});
