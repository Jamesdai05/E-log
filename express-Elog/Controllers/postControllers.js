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
  const report = new reportModel(req.body);
  try {
    // await report.save();
    await report.save();
    return res.status(201).json(report);
  } catch (err) {
    res.status(500).json(err);
  }
};

// const

const updateReport = async (req, res) => {
  const id = req.params.id;
  try {
    const report = await reportModel.findById(id);
    if (report.username === req.body.username) {
      try {
        const updatedReport = await reportModel.findByIdAndUpdate(
          id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(201).json(updatedReport);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can only update your own posts!");
    }
  } catch (e) {
    res.status(500).json(e);
  }
};

//delete the post
const deleteReport = async (req, res) => {
  const id = req.params.id;
  try {
    const report = await reportModel.findById(id);
    if (report.username === req.body.username) {
      try {
        await report.delete();
        res.status(200).json({ message: "Post has been deleted!" });
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json({ message: "You only can delete your post!" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const getReport = async (req, res) => {
  try {
    const id = req.params.id;
    const report = await reportModel.findById(id);
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
