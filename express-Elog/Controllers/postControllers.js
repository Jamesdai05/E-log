const reportModel = require("../Models/Report");

const fetchAllReports = async (req, res) => {
  try {
    const reports = await reportModel.find({});
    res.status(200).json(reports);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to get reports!" });
  }
};

const createReport = (req, res) => {
  res.send("created!");
};

module.exports = {
  fetchAllReports,
  createReport,
};
