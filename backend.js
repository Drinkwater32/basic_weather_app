// backend.js

// Used as a mini backend so API key can be grabbed from an environment variable without being shown in the app bundle

// Define Port
const PORT = 8000;

// Import Modules Needed
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

// Initialize Backend
const backend = express();

// Allow cross origin requests
backend.use(cors());

// Proof of concept for backend working (visit localhost port defined above)
backend.get("/", (res) => {
  res.json("welcome to the backend! :)");
});

// API Call for getWeather
backend.get("/getWeather", (req, res) => {
  const city = req.query.city;
  if (!city) {
    return res.status(400).json({ error: "no city" });
  }

  const options = {
    method: "GET",
    url:
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      process.env.REACT_APP_OPENWEATHER_API_KEY, // Add your own .env file to your root folder, REACT_APP_OPENWEATHER_API_KEY=YOURKEYHERE (no quotes)
  };

  // Request Response and handle any errors
  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

// Spin up backend with confirmation of where it's running
backend.listen(PORT, () => console.log(`Backend is running on port ${PORT}`));
