
const getCityCoords = async (baseURL, destination, geonames_user_key) => {//grabs the coords of the target city to submit to Weatherbit API
  const res = await fetch(
    baseURL + destination + "&maxRows=1&username=" + geonames_user_key
  );
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export { getCityCoords}