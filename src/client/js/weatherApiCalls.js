let baseURL2 = "https://api.weatherbit.io/v2.0/current?units=I&lat=";
let baseUrlFuture ="https://api.weatherbit.io/v2.0/forecast/daily?units=I&lat=";
const weatherApiKEY = "8ae2e8451ba04aee8cf20f2edb60ba54";

const getCurrentWeather = async (longitude, lattitude) => {//if departure is within 7 days
  const res = await fetch(
    baseURL2 + lattitude + "&lon=" + longitude + "&key=" + weatherApiKEY
  );
  try {
    const json = await res.json();

    return json;
  } catch (error) {
    console.log("error", error);
  }
};

const getFutureWeather = async (longitude, lattitude) => {//if departure is greater than 7 days from today
  const res = await fetch(
    baseUrlFuture + lattitude + "&lon=" + longitude + "&key=" + weatherApiKEY
  );
  try {
    const json = await res.json();
    return json;
  } catch (error) {
    console.log("error", error);
  }
};

export { getCurrentWeather, getFutureWeather };
