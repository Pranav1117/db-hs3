const collection = require("../model/structure");

const insertData = async (req, res) => {
  const data = req.body;

  try {
    const employeeObj = new collection({
      firstName: data.firstName,
      lastName: data.lastName,
      salary: data.salary,
      department: data.department,
      lastCompany: data.lastCompany,
      lastSalary: data.lastSalary,
      overallExp: data.overallExp,
      contactInfo: data.contactInfo,
      yearGrad: data.yearGrad,
      gradStream: data.gradStream,
    });
    const result = await employeeObj.save();
    return res.send(result, "succes");
  } catch (error) {
    return res.send(error);
  }

};

const getSalaryData = async (req, res) => {
  const salary = req.params.salary;
  const query = { salary: { $gt: salary } };

  const result = await collection.find(query);
  return res.send(result);
};

const getAllDay = async (req, res) => {
  try {
    const result = await collection.find();
    return res.status(200).send(result);
  } catch (error) {
    return res.send(error);
  }
};

const getExpDay = async (req, res) => {
  let overallEx = req.params.exp;
  let query = { overallExp: { $gt: overallEx } };
  const result = await collection.find(query);
  return res.send(result);
};

const getGradExpDay = async (req, res) => {
  let yearGrad = req.params.grad;
  let overallEx = req.params.exp;
  let query = {
    yearGrad: { $gt: { yearGrad }, overallExp: { $gt: overallEx } },
  };
  const result = await collection.find(query);
  return res.send(result);
};

const updateData = async (req, res) => {
  const filter = req.body.filter;
  const val = { salary: { $gt: filter.salary } };
  const update = req.body.update;
  const updateValue = { $set: update };

  const result = await collection.updateMany(filter, updateValue);
  return res.send(result);
};

const deleteEmp = async (req, res) => {
  const lastCompany = req.params.lastCompany;
  const query = { lastCompany: lastCompany };

  const result = await collection.deleteMany(query);
  return res.send(result);
};

module.exports = {
  deleteEmp,
  updateData,
  getAllDay,
  getExpDay,
  getGradExpDay,
  getSalaryData,
  insertData,
};
