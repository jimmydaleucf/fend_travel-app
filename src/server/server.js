

// Express to run server and routes
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const database = require("mime-db");
const request = require("request"); 
const res = require("express/lib/response");

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
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});


app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
  // res.sendFile(path.resolve('src/client/views/index.html')) //{{removing as we now need to reference the dist folder file}}
});

app.get('/image', (req,res) => {
  console.log('GETTING IMAGE');
  request(
    {url: `https://pixabay.com/api/?key=24887647-41a0d54ffd7c876db41d2b5f2&q=${projectData.location}`},
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }
      res.json(JSON.parse(body));
    }
  )
});


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
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
// app.get("/getCoords", getData)
app.get("/all", getAll)



// Callback function to complete GET '/getAll'//
function getAll(req, res) {
  // console.log('GET')
  res.send(projectData);
};

// Post Routes
app.post('/addData', addData);

function addData(req, res) {
  newData = {
    description: req.body.description,
    icon: req.body.icon,
    temp: req.body.temp,
    location: req.body.location
  };
  projectData = newData;
  console.log(newData);
  console.log(projectData.location)
  res.send(projectData);
}
export{ addData }
