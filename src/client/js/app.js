/* Global Variables */
let baseURL = "http://api.geonames.org/searchJSON?q=";
const geonames_user_key = "jimmydaleucf";
const destination = document.getElementById("destination").value;




//Once a click occurs, this function will call and get the coords for the destination//
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
      const dateDiff = Client.calcDate(tripDate, shortDate);
      const pic_destination = destination.replace(/\s+/g, "");
      console.log(pic_destination);
    //   console.log(dateDiff);
      //   const roundedDate = Math.ceil(dateDiff);
      //   console.log(roundedDate);
      if (dateDiff > 7) {
        console.log("Grabbing future weather conditions");
        Client.getFutureWeather(longitude, lattitude).then(function (json) {
          console.log(pic_destination);
          Client.postData("http://localhost:8081/addData", {
            //posts the weather data received to the server
            description: json.data[15].weather.description,
            icon: json.data[15].weather.icon,
            temp: json.data[15].temp,
            location: pic_destination,
          });
          document.getElementById("weather-h3").innerText = "Typical Weather";
          Client.updateUI();
        });
      } else if (dateDiff > -1 && dateDiff <= 7) {
        console.log("Grabbing current weather conditions");
        Client.getCurrentWeather(longitude, lattitude) //calls weather API
          .then(function (json) {
            Client.postData("http://localhost:8081/addData", {
              //posts the weather data received to the server
              description: json.data[0].weather.description,
              icon: json.data[0].weather.icon,
              temp: json.data[0].temp,
            });
            document.getElementById("weather-h3").innerText = "Current Weather";
            Client.updateUI();
          });
      } else {
        console.log(Client.calcDate(tripDate, shortDate));
        alert("Please enter a valid travel date to continue");
      }
    });
    
}






export { processInfo}
