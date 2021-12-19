// Test the express server
const app = require("./server.js"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);

it("Testing /test endpoint", async done => {
  const response = await request.get("/test")
  // expect(response.status).toBe(200); // check if request was successful
  expect(response.body.message).toBe('pass!') // check if response returned value of projecteData
  done()
});

// describe("GET /addData", ()=> {
//   test("should respond back with a 200 status code",() => {
//     const response =  request(app).post("/addData").send({
//       description: "TEST",
//       icon: "TEST",
//       temp: "72",
//       location: "Atlanta",
//     });
//   })
//   expect(response.statusCode).toBe(200)
// })