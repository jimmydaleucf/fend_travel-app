const app =require('./server.js')
const port = 8081;
const server = app.listen(port, listening);
function listening() {
  console.log(`server up and running on localhost:${port}`); // Callback to debug//
}
