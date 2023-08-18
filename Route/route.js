const {
  updateData,
  getAllDay,
  getGradExpDay,
  getExpDay,
  getSalaryData,
  insertData,
} = require("../controller/controller");

const route = require("express").Router();

route.post("/insert", insertData);

route.post("/update", updateData);

route.get("/alldata", getAllDay);

route.get("/gradexpdata", getGradExpDay);

route.get("/expdata", getExpDay);

route.get("/salary", getSalaryData);

module.exports = { route };
