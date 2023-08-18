const express = require("express");
const app = express();
const connect = require("./DB/mogoose");
const { route } = require("./Route/route");
app.use(express.json());
app.use(route)
app.get("/", (req, res) => {
  return res.send("Home Page");
});

const url="mongodb://127.0.0.1:27017/Handson_3"
app.listen(5050,async () => {
  try {
      await connect(url);
      console.log("server running on port 5050");
  } catch (err) {
      console.log(err, "error occurred in running");
  }
});
