import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import getWeather from "../utils/getWeather";

const SearchForm = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleWeatherSearch = async (e) => {
    // prevent default search
    e.preventDefault();

    try {
      // Call API to get weather from the backend
      const weatherResults = await getWeather(city);
      console.log(weatherResults);
      onSearch(weatherResults);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleWeatherSearch}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={9}>
          <TextField
            fullWidth
            id="location"
            label="Search for a City"
            variant="filled"
            value={city}
            onChange={handleCityChange}
            InputProps={{
              style: {
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                borderRadius: "15px",
              },
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            type="submit"
            variant="contained"
            style={{ backgroundColor: "#1976d2", color: "#ffffff" }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SearchForm;
