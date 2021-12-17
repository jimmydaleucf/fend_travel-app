/* Global Variables */

let baseURL = "http://api.geonames.org/searchJSON?q=";
let baseURL2 = "https://api.weatherbit.io/v2.0/current?lat="
const geonames_user_key = "jimmydaleucf";
const weatherApiKEY= "8ae2e8451ba04aee8cf20f2edb60ba54"


const destination = document.getElementById("destination").value;

//Once a click occurs, this function will call and get the weather info from the API//
function processInfo(e) {
    e.preventDefault();
  const destination = document.getElementById("destination").value;
  // console.log(destination);
//   const travelDate = document.getElementById("departureDate").value;
  getCityCoords(baseURL, destination, geonames_user_key) //get the coords of the destination//
    .then(function (data) {
        // console.log(data);
        // console.log(data.geonames[0].lng);
        // console.log(data.geonames[1].lat);
        const longitude = data.geonames[0].lng;
        const lattitude = data.geonames[1].lat;
        // console.log(longitude)
        // console.log(lattitude)
        getWeather(longitude, lattitude);
                  
        // getWeather();

      //then post the data to the server//
      // postData("http://localhost:8081/addCoords", {
      //   lon: data.geonames[0].lng,
      //   lat: data.geonames[1].lat,
      //   country: data.geonames[1].countryName
      // });
    //   updateUI(); //this runs and updates the UI!//
    });
}

const getCityCoords = async (baseURL, destination,  geonames_user_key) => {
  const res = await fetch(
    baseURL + destination+"&maxRows=10&username=" + geonames_user_key
  );
  // console.log(res);
  try {
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

const postData = async (url = "", data = {}) => {
  // console.log("POST");
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  // console.log(data);

  try {
    const newData = await response.json();
    console.log("newData="+newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

// const getCoords = async (url = "") => {
//   const request = await fetch("http://localhost:8081/getCoords");
//   try {
//     const allData = await request.json();
//     // console.log(allData);
    
//   } catch (error) {
//     console.log("error", error);
//   }
// };

const getWeather = async (longitude, lattitude) => {
  const res = await fetch(
    baseURL2 + lattitude + "&lon=" + longitude + "&key=" + weatherApiKEY
  );
    try {
      const json = await res.json();
      console.log('weatherJSONgenerated');
      console.log(json);
      return json;
    }catch (error){
      console.log('error', error);
    }
}

export { processInfo}
