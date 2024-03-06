// ResultsDisplay.js

// What to render with a successful search

// Utility Imports
import { tempDisplay } from "../utils/tempDisplay";

const ResultsDisplay = ({ searchResults }) => {

const currentTemp = tempDisplay(searchResults.main.temp)
const feelsLike = tempDisplay(searchResults.main.feels_like)
const high = tempDisplay(searchResults.main.temp_max)
const low = tempDisplay(searchResults.main.temp_min)

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
