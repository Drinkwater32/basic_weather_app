// LocationSearch.js

// Search area for weather information

// Module Imports
import React, { useState } from "react";

// Function Imports
import getWeather from "../utils/getWeather";

const LocationSearch = () => {
  // Define city var and set up for its change
  const [city, setCity] = useState("");

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleWeatherSearch = (e) => {
    e.preventDefault();
    getWeather(city);
  };

  return (
    <section>
      <h2>Search for Weather</h2>
      <form onSubmit={handleWeatherSearch}>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={city}
          onChange={handleCityChange}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default LocationSearch;
