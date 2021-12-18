/* Global Variables */

import { calcDate } from "..";

let baseURL = "http://api.geonames.org/searchJSON?q=";
let baseURL2 = "https://api.weatherbit.io/v2.0/current?units=I&lat="
let baseUrlFuture = "https://api.weatherbit.io/v2.0/forecast/daily?units=I&lat=";
const geonames_user_key = "jimmydaleucf";
const weatherApiKEY= "8ae2e8451ba04aee8cf20f2edb60ba54"


const destination = document.getElementById("destination").value;

//Once a click occurs, this function will call and get the coords for the destination//
function processInfo(e) {
  e.preventDefault();
  const todayDate = new Date();//creates a new date with today's date//
  let text= todayDate.toISOString();//converts that date variable into a string
  let shortDate = Date.parse(text) //shortens the date to only YYYY/MM/DD//
  // console.log('todays date');
  // console.log(shortDate);
  const destination = document.getElementById("destination").value;//grabs the destination from the user input//
  const tripDate = Date.parse(document.getElementById("departure-date").value);//grabs the departure date entered by user//
  // console.log('Trip Date');
  // console.log(tripDate);
  // Client.calcDate(tripDate, shortDate);
  getCityCoords(baseURL, destination, geonames_user_key) //get the coords of the destination to be used in the Weather API//
    //regardless of when trip is, all of the above needs to be run//
    .then(function (data) {
      const longitude = data.geonames[0].lng;
      const lattitude = data.geonames[0].lat;
      //this is where the if/elseif needs to go//
      if (Client.calcDate(tripDate, shortDate) === true) {
        console.log("Grabbing future weather conditions");
        getFutureWeather(longitude,lattitude)
        .then(function (json){
          postData("http://localhost:8081/addData", {
              //posts the weather data received to the server
              description: json.data[15].weather.description,
              icon: json.data[15].weather.icon,
              temp: json.data[15].temp,
            });
        });
      } else {
        console.log("Grabbing current weather conditions")
        getCurrentWeather(longitude, lattitude) //calls weather API
          .then(function (json) {
            postData("http://localhost:8081/addData", {
              //posts the weather data received to the server
              description: json.data[0].weather.description,
              icon: json.data[0].weather.icon,
              temp: json.data[0].temp,
            });
          });
      }
    });
}

const getCityCoords = async (baseURL, destination,  geonames_user_key) => {
  const res = await fetch(
    baseURL + destination+"&maxRows=1&username=" + geonames_user_key
  );
  // console.log(res);
  try {
    const data = await res.json();
    console.log(data);
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
    console.log(newData);
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

const getCurrentWeather = async (longitude, lattitude) => {
  console.log(longitude);
  console.log(lattitude);
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

const getFutureWeather = async (longitude, lattitude) => {
  console.log(longitude);
  console.log(lattitude);
  const res = await fetch(
    baseUrlFuture + lattitude + "&lon=" + longitude + "&key=" + weatherApiKEY
  );
  try {
    const json = await res.json();
    console.log("weatherJSONgenerated");
    console.log(json);
    return json;
  } catch (error) {
    console.log("error", error);
  }
};

export { processInfo}
