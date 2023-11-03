const fs = require("fs");
const util = require("util");
const reportModel = require("../Models/Report");
const validateMongodbId = require("../util/validationOfMongoid");
const { uploadFile, getFileStream } = require("../s3");
// const multer = require("multer");
const unlinkFile = util.promisify(fs.unlink);
// const upload = multer({ dest: "uploads/" });
const cloudinaryUploadImg=require("../util/cloudinaryUploadImg")

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
    //file creating
    const file = req.file;
    // console.log("teest123");
    // console.log(req.body);
    // console.log(file);
    // const result = await uploadFile(file);
    // await unlinkFile(file.path);
    // console.log("11111 below is result")
    // console.log(result);
    // res.status(400).json(result);
    //create post

    ////////////////////////////
    console.log(req.file);
    const localPath = `public/images/post/${req.file.filename}`;

    const imgUploaded = await cloudinaryUploadImg(localPath);
    console.log(imgUploaded);


    // console.log(req.body.user);
    const id = req.body.user;
    const report = await reportModel.create({ ...req.body, user: id ,photo:imgUploaded?.url});
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
  // res.json({ message: "file update.." });
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
    // console.log(typeof id);
    const report = await reportModel.findById(id).populate("user");
    // console.log(ObjectId.isValid(id));
    console.log(report);
    console.log("2");
    res.status(200).json(report);
  } catch (err) {
    res.status(500).json(err);
  }
};

//image upload controller
// const imageUploadController = async (req, res) => {
//   const file = req.file;
//   console.log("abcd body");
//   console.log(req.body);
//   console.log("12345 file");
//   console.log(file);
//   const result = await uploadFile(file);
//   await unlinkFile(file.path);
//   console.log(result);
//   const description = req.body.description;
//   // res.send({ imagePath: `/images/${result.Key}` });
//   res.json(file);
// };

// const getImage = async (req, res) => {
//   console.log(req.params);
//   const key = req.params.key;
//   const readStream = getFileStream(key);

//   readStream.pipe(res);
// };

//using cloudinary

module.exports = {
  fetchAllReports,
  createReport,
  updateReport,
  deleteReport,
  getReport,
  // imageUploadController,
  // getImage,
};
