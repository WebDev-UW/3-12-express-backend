// first run 'npm install express' in the console
const express = require("express");
const app = express();
const port = 5000;

// runs on ex. 1
app.get("/", (req, res) => {
  console.log("Hello World");
});

// runs on ex. 2
app.post("/message", (req, res) => {
  // req.body is the body attribute we pass in the fetch ex. 2
  const name = req.body.name;
  const message = req.body.message;
  console.log(`${name} says: ${message}`);
  res.send({ name: "The server", message: "recieved" });
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

// ex. 1
fetch("http://localhost:5000/");

// ex. 2
fetch("http://localhost:5000/messgae", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: "The client", message: "Hello!" }),
});
