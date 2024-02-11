// component imports
import React, { useState } from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import DefaultDisplay from "./components/DefaultDisplay";
import ResultsDisplay from "./components/ResultsDisplay";
import SearchError from "./components/SearchError";

function App() {
  const [searchResult, setSearchResult] = useState(null);
  const [searchError, setSearchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (searchQuery) => {
    setIsLoading(true);
    try {
      // Simulate search operation with a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Placeholder result
      setSearchResult(searchQuery.toUpperCase());
      setSearchError(null);
    } catch (error) {
      setSearchResult(null);
      setSearchError(error.message);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <Header />
      <SearchForm onSearch={handleSearch} />
      {isLoading && <p>Loading...</p>}
      {!isLoading && searchResult && <ResultsDisplay result={searchResult} />}
      {!isLoading && searchError && <SearchError error={searchError} />}
      {!isLoading && !searchResult && !searchError && <DefaultDisplay />}
    </div>
  );
}

export default App;
