const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const url = "mongodb://127.0.0.1:27017/Handson_3";

const connect = async () => {
  try {
    await mongoose.connect(url);
    console.log("connected to atlas");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connect;
