import React, { useState } from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import TextDisplay from "./components/TextDisplay";
import ResultsDisplay from "./components/ResultsDisplay";
import { Grid } from "@mui/material";

function App() {
  const [searchResults, setSearchResults] = useState(null);

  return (
    <div
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1561484930-998b6a7b22e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        color: "white",
        fontSize: "24px",
      }}
    >
      <Header />
      <div style={{ marginLeft: "120px", marginTop: "30px" }}>
        <Grid container style={{ height: "calc(100% - 64px)" }} spacing={2}>
          <Grid item xs={12} sm={4} style={{ padding: "20px" }}>
            <SearchForm onSearch={setSearchResults} />
          </Grid>
          <Grid item xs={12} sm={8} style={{ padding: "20px" }}>
            <TextDisplay searchResults={searchResults} />
          </Grid>
          <Grid item xs={12} style={{ padding: "20px", display: "flex", justifyContent: "center" }}>
            <ResultsDisplay searchResults={searchResults} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
