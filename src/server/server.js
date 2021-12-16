// Setup empty JS object to act as endpoint for all routes
projectData = {}

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

// Initialize all route with a callback function//
app.get("/all", getData)


// Callback function to complete GET '/all'//
function getData(req, res) {
  console.log('GET')
  res.send(projectData);
};

// Post Route
app.post('/addData', addData);
// console.log("POST")

function addData(req,res) {
    // console.log(req.body);
    newEntry = {
      lon: req.body.lon,
      lat: req.body.lat
    };  
    
    console.log(newEntry);

    projectData = newEntry
    res.send(projectData)
    // console.log(projectData)
}
