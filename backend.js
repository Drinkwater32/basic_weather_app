const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const PORT = 8000;

const backend = express();

backend.use(cors());

backend.get("/", (req, res) => {
  res.json("welcome to the backend! :)");
});

backend.get("/getWeather", async (req, res) => {
  try {
    const city = req.query.city;
    if (!city) {
      return res.status(400).json({ error: "no city provided" });
    }

    const options = {
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`,
    };

    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
});

backend.listen(PORT, () => console.log(`Backend is running on port ${PORT}`));
