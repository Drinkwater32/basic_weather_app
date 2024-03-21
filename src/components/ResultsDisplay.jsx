// ResultsDisplay.js

// What to render with a successful search

// Utility Imports
import { tempDisplay } from "../utils/tempDisplay";

const ResultsDisplay = ({ searchResults }) => {

const currentTemp = searchResults ? tempDisplay(searchResults.main.temp) : null
const feelsLike = searchResults ? tempDisplay(searchResults.main.feels_like) : null
const high = searchResults ? tempDisplay(searchResults.main.temp_max) : null
const low = searchResults ? tempDisplay(searchResults.main.temp_min) : null

  return (
    <div>
      {searchResults ? (
    <>
    {/* Display weather information */}
    <p>Current Temp: {currentTemp}</p>
    <p>Feels like: {feelsLike}</p>
    <p>High Today: {high}</p>
    <p>Low Today: {low}</p>
  </>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default ResultsDisplay;
