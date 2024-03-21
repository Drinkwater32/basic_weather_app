import { render, screen, fireEvent } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";
import getWeather from "../../utils/getWeather";

jest.mock("../../utils/getWeather");

describe("Scraping Weather", () => {
  test("Given search input has a valid input, when search is clicked, then expect search to be called with proper input", async () => {
    render(<SearchForm />);
    const locationInput = screen.getByRole("textbox", {
      name: "Search for a City",
    });
    const searchButton = screen.getByText("Search");

    fireEvent.change(locationInput, { target: { value: "Chicago" } });
    fireEvent.click(searchButton);

    expect(getWeather).toHaveBeenCalledWith("Chicago");
  });
});
