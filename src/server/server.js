

// Express to run server and routes
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const database = require("mime-db");

// Start up an instance of app
const app = express();

/* Dependencies */
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static("dist"));


app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
  // res.sendFile(path.resolve('src/client/views/index.html')) //{{removing as we now need to reference the dist folder file}}
});

// Spin up the server
const port = 8081;
const server = app.listen(port, listening);
function listening() {
  console.log(`server up and running on localhost:${port}`); // Callback to debug//
}

// Setup empty JS object to act as endpoint for all routes
coordData = {}
projectData ={}

// Initialize all route with a callback function//
app.get("/getCoords", getData)


// Callback function to complete GET '/all'//
function getData(req, res) {
  console.log('GET')
  res.send(coordData);
};

// Post Routes
app.post('/addCoords', addCoords);
app.post('/addData', addData);
// console.log("POST")

function addCoords(req,res) {
    // console.log(req.body);
    newEntry = {
      lon: req.body.lon,
      lat: req.body.lat,
      country: req.body.country
    };  
    console.log(newEntry);
    coordData = newEntry
    res.send(coordData)
    // console.log(coordData)
}

function addData(req,res){
  newData = {
    description: req.body.description,
    sunrise: req.body.sunrise,
    sunset: req.body.sunset,
    icon: req.body.icon,
    temp: req.body.temp,
  };
  console.log(newData);
  projectData = newData; 
  res.send(newData)
}
