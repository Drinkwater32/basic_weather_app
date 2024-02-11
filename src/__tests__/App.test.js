import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App Component", () => {
  // Test for rendering the app without crashing
  test("renders the app without crashing", () => {
    render(<App />);
  });

  // Test for correct heading in the application
  test("renders the heading with the correct text", () => {
    const { getByText } = render(<App />);
    const appTitle = getByText(/weather app/i);
    expect(appTitle).toBeInTheDocument();
  });

  // Test for location input rendering (placeholder test)
  test("renders a location input", () => {
    render(<App />);
    const locationInput = screen.getByRole("textbox", {
      name: "Search for a City",
    });
    expect(locationInput).toBeInTheDocument();
  });
});
