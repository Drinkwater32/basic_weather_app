import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App Component", () => {
  test("renders the app without crashing", () => {
    render(<App />);
  });

  test("renders the heading with the correct text", () => {
    const { getByText } = render(<App />);
    const appTitle = getByText(/weather app/i);
    expect(appTitle).toBeInTheDocument();
  });

  test("renders a location input", () => {
    render(<App />);
    const locationInput = screen.getByRole("textbox", {
      name: "Search for a City",
    });
    expect(locationInput).toBeInTheDocument();
  });
});
