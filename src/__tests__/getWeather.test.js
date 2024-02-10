import { render, screen, fireEvent } from "@testing-library/react";
import LocationSearch from "../components/LocationSearch";
import getWeather from "../utils/getWeather";

// Mock the getWeather function
jest.mock("../utils/getWeather");

describe("Scraping Weather", () => {
  test("calls the API with correct input when the search button is clicked", async () => {
    // Arrange: Render the location search bar
    render(<LocationSearch />);
    const locationInput = screen.getByLabelText("Location:");
    const searchButton = screen.getByText("Search");

    // Act: Execute a search
    fireEvent.change(locationInput, { target: { value: "Chicago" } });
    fireEvent.click(searchButton);

    // Assert function was called with proper params
    expect(getWeather).toHaveBeenCalledWith("Chicago");
  });
});
