import axios from "axios";
async function getWeather(city) {
  // Access backend to use API with my API key
  const options = {
    method: "GET",
    url: "http://localhost:8000/getWeather?city=" + city,
  };

  try {
    const response = await axios(options);
    console.log("here is my response");
    console.log(response);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("getWeather.js error:");
    console.error(error);
    console.log("end getWeather.js error");

    if (error.response.data.error === "no city") {
      return "no city";
    }
  }
}

export default getWeather;
