const reportModel = require("../Models/Report");
const validateMongodbId = require("../util/validationOfMongoid");

const fetchAllReports = async (req, res) => {
  try {
    const reports = await reportModel.find({});
    res.status(200).json(reports);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to get reports!" });
  }
};

const createReport = async (req, res) => {
  try {
    console.log(req.body.user);
    const id = req.body.user;
    const report = await reportModel.create({ ...req.body, user: id });
    // console.log(report);
    // await report.save();
    return res.status(201).json(report);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

// const createReport = async (req, res) => {
//   try {
//     const report = await reportModel.create(req.body);
//     await report.save();
//     return res.status(201).json(report);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };

const updateReport = async (req, res) => {
  const id = req.params.id;
  validateMongodbId(id);
  try {
    const report = await reportModel.findByIdAndUpdate(
      id,
      {
        ...req.body,
        user: req.user?._id,
      },
      { new: true }
    );
    // console.log("2")
    res.status(201).json(report);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
  //   res.json({message:"file update.."})
};

//delete the post
const deleteReport = async (req, res) => {
  const id = req.params.id;
  validateMongodbId(id);
  try {
    const report = await reportModel.findByIdAndDelete(id);
    res.status(200).json({ message: "post deleted..." });
    console.log(report);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  // res.send("Report deleted...");
};

const getReport = async (req, res) => {
  try {
    const id = req.params.id;
    validateMongodbId(id);
    console.log(id);
    // const report = await reportModel.findById(id).populate("user");
    // const report = await reportModel.findById(id);
    console.log(typeof id);
    const report = await reportModel.findById(id);
    // console.log(ObjectId.isValid(id));
    console.log(report);
    console.log("2");
    res.status(200).json(report);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  fetchAllReports,
  createReport,
  updateReport,
  deleteReport,
  getReport,
};
