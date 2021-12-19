import { getPhoto } from "..";

/* Global Variables */
let baseURL = "http://api.geonames.org/searchJSON?q=";
const geonames_user_key = "jimmydaleucf";
const destination = document.getElementById("destination").value;

//Once the user inputs a city and date and then hits "submit" , this function will kickoff//
function processInfo(e) {
  e.preventDefault();
  const todayDate = new Date();//creates a new date with today's date//
  let text= todayDate.toISOString();//converts that date variable into a string
  let shortDate = Date.parse(text) //shortens the date to only YYYY/MM/DD//
  const destination = document.getElementById("destination").value;//grabs the destination from the user input//
  const tripDate = Date.parse(document.getElementById("departure-date").value);//grabs the departure date entered by user//
  Client.getCityCoords(baseURL, destination, geonames_user_key) //get the coords of the destination to be used in the Weather API//
    .then(function (data) {
      const longitude = data.geonames[0].lng;
      const lattitude = data.geonames[0].lat;
      const dateDiff = Client.calcDate(tripDate, shortDate);//caclulates the number of days in the future that the trip begins on
      const pic_destination = destination.replace(/\s+/g, "");//removes any spaces in the user submitted text to allow for inclusion in the API
      Client.countdown(dateDiff, destination); //pushes the text to UI that shows how many days are left until the trip
      if (dateDiff > 7) {// if further out than a week, call and get the future weather conditions
        Client.getFutureWeather(longitude, lattitude)//call future forecast API
        .then(function (json) {
          Client.postData("http://localhost:8081/addData", {
            //posts the weather data received to the server
            description: json.data[15].weather.description,
            icon: json.data[15].weather.icon,
            temp: json.data[15].temp,
            location: pic_destination,
          }).then (function(){
              Client.getPhoto().then(function (image_url) {//this function fetches the appropriate image from Pixabay
              });
          });
          document.getElementById("weather-h3").innerText = "Typical Weather";
        }).then (function(){
            Client.updateUI();
        })
      } else if (dateDiff > -1 && dateDiff <= 7) {//if trip is within 7 days, call the current forecast API
        console.log("Grabbing current weather conditions");
        Client.getCurrentWeather(longitude, lattitude) //calls weather API
          .then(function (json) {
            Client.postData("http://localhost:8081/addData", {
              //posts the weather data received to the server
              description: json.data[0].weather.description,
              icon: json.data[0].weather.icon,
              temp: json.data[0].temp,
              location: pic_destination,
            }).then(function () {
              Client.getPhoto().then(function (image_url) {//this function fetches the appropriate image from Pixabay
              });
            });
            document.getElementById("weather-h3").innerText = "Typical Weather";
          })
          .then(function () {
            Client.updateUI();
          });
        
      } else {//if date occurs in the past-- alert user to input a valid departure date
        console.log(Client.calcDate(tripDate, shortDate));
        alert("Please enter a valid travel date to continue");
      }
    });
    
}






export { processInfo}
