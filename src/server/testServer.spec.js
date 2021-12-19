// Test the express server
const app = require("./server.js"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);

it("Testing /test endpoint", async done => {
  const response = await request.get("/test")//send test GET at /test//
  expect(response.body.message).toBe('pass!') // check if response returned value of projecteData
  done()
});
