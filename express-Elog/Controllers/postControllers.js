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

const createReport = async (req, res) => {
  try {
    const report = await reportModel.create(req.body);
    await report.save();
    res.status(201).json(report);
  } catch (err) {
    res.status(500).json(err);
  }
};

// const

// const updateReport = async (req, res) => {
//   const id = req.params.id;
//   try {
//     const report = await reportModel.findById(id);
//     if (report.username === req.body.username) {
//       try {
//         const updatedReport = await reportModel.findByIdAndUpdate(
//           id,
//           {
//             $set: req.body,
//           },
//           { new: true }
//         );
//         res.status(201).json(updatedReport);
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     } else {
//       res.status(401).json("You can only update your own posts!");
//     }
//   } catch (e) {
//     res.status(500).json(e);
//   }
// };

module.exports = {
  fetchAllReports,
  createReport,
  // updateReport,
};
