// LocationSearch.js
import React from "react";

const LocationSearch = () => {
  return (
    <section>
      <h2>Search for Weather</h2>
      <form>
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location" />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default LocationSearch;
