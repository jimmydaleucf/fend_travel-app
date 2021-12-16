/* Global Variables */

let baseURL = "http://api.geonames.org/searchJSON?q=";
const geonames_user_key = "jimmydaleucf";

//listen for 'click' and then run processInfo
document.getElementById("submit").addEventListener("click", processInfo);
const destination = document.getElementById("destination").value;
// const travelDate = document.getElementById("departureDate").value;

//Once a click occurs, this function will call and get the weather info from the API//
function processInfo(e) {
    e.preventDefault();
  const destination = document.getElementById("destination").value;
  console.log(destination);
//   const travelDate = document.getElementById("departureDate").value;
  getCityCoords(baseURL, destination, geonames_user_key) //get the coords of the destination//
    .then(function (data) {
        console.log(data);
        console.log(data.geonames[0].lng);
        console.log(data.geonames[1].lat);
      //then post the data to the server//
      postData("http://localhost:8081/addCoords", {
        lon: data.geonames[0].lng,
        lat: data.geonames[1].lat,
      });
    //   updateUI(); //this runs and updates the UI!//
    });
}

const getCityCoords = async (baseURL, destination,  geonames_user_key) => {
  const res = await fetch(
    baseURL + destination+"&maxRows=10&username=" + geonames_user_key
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

const postData = async (url = "", data = {}) => {
  console.log("POST");
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
    // console.log(newData);//problem seems to be around here, newData is coming back empty//
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

export { processInfo}
// const updateUI = async (url = "") => {
//   const request = await fetch("/all");
//   try {
//     const allData = await request.json();
//     // console.log(allData);
//     document.getElementById("date").innerHTML = "Date: " + allData.date;
//     document.getElementById("temp").innerHTML =
//       "Temp: " + allData.temp + "\u00B0 F";
//     document.getElementById("content").innerHTML =
//       "How I feel today: " + allData.userInput;
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// // Create a new date instance dynamically with JS
// let d = new Date();
// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// let newDate = months[d.getMonth()] + "." + d.getDate() + "." + d.getFullYear();
