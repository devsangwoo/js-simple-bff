const express = require("express");
const app = express();
const axios = require("axios");

const options = {
  url: "https://jsonplaceholder.typicode.com/todos/1",
  method: "get",
  headers: { "X-Custom-Header": "foobar" },
};

const getRequest = async (url) => {
  try {
    const response = await axios.get(url);
    console.log(`response.data`, response.data);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
// Get all users
app.get("/api/v1/bff", async (req, res) => {
  // Connect database
  const userApi = await getRequest(
    "https://jsonplaceholder.typicode.com/users/1"
  );
  const postApi = await getRequest(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  return res.send(`${userApi.name} ${postApi.title} `);
});

const port = process.env.PORT || 3000;
app.listen(port);
console.log("Listen on port: " + port);
