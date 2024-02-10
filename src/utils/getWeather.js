import axios from 'axios';

async function getWeather(city) {

  // Access backend to use API with my API key
  const options = {
    method: 'GET',
    url: 'http://localhost:8000/getWeather?city=' + city
  };

  try {
    const response = await axios(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; 
  }
}

export default getWeather;
