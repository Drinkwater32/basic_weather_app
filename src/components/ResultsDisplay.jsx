// ResultsDisplay.js

// What to render with a successful search

const ResultsDisplay = ({ searchResults }) => {
  return (
    <div>
      {searchResults ? (
    <>
    {/* Display weather information */}
    <p>Current Temp: {searchResults.main.temp}</p>
    <p>Feels like: {searchResults.main.feels_like}</p>
    <p>High Today: {searchResults.main.temp_max}</p>
    <p>Low Today: {searchResults.main.temp_min}</p>
  </>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default ResultsDisplay;
