baseURL = "https://api.weatherbit.io/v2.0/current?lat=";


let baseURL2 = "https://api.weatherbit.io/v2.0/current?lat=";
let apiKey = "8ae2e8451ba04aee8cf20f2edb60ba54";
const getWeather = async (baseURL2, lon, lat, apiKey) => {
  const res = await fetch(baseURL2 + lat + "&lon=" + lon + "&key=" + apiKey);
  try {
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

const getCityCoords = async (baseURL, destination, geonames_user_key) => {
  const res = await fetch(
    baseURL + destination + "&maxRows=10&username=" + geonames_user_key
  );
  console.log(res);
  try {
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export {getWeather}