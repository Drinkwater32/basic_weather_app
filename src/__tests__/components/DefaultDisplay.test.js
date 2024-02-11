import React from "react";
import { render } from "@testing-library/react";
import TextDisplay from "../../components/TextDisplay";

describe("TextDisplay component", () => {
  test("renders default message when no props are provided", () => {
    const { getByText } = render(<TextDisplay />);
    const defaultMessage = getByText(/search for a city with the form/i);
    expect(defaultMessage).toBeInTheDocument();
  });
});
