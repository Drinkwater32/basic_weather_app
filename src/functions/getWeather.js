const apiKey = process.env.your_api_key_here;

async function getWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("example weather data");
    console.log(data);
    return data;
  } catch (error) {
    console.error("There was a problem with your fetch operation:", error);
    return null;
  }
}

export default getWeather;
