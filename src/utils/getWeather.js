import axios from "axios";
async function getWeather(city) {
  const options = {
    method: "GET",
    url: "http://localhost:8000/getWeather?city=" + city,
  };

  try {
    const weatherData = await axios(options);
    return weatherData.data;
  } catch (error) {
    console.error(error);

    if (error.response.data.error === "no city") {
      return "no city";
    }
  }
}

export default getWeather;
