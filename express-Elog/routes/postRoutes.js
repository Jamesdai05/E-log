var express = require("express");
var router = express.Router();
const reportControllers = require("../Controllers/postControllers");
const authentication = require("../Middleware/authentication");
// const reportControllers =require("")
const multer = require("multer");
// const upload = multer({ dest: "uploads/" });
const {
  profilePhotoUpload,
  postPhotoResize,
} = require("../Middleware/uploads/profilePhotoUpload");

/* GET home page. */
router.get("/", reportControllers.fetchAllReports);

// router.post("/", authentication, reportControllers.createReport);

router.post("/", profilePhotoUpload.single("photo"),postPhotoResize, reportControllers.createReport);

// router.post("/", authentication, reportControllers.createReport);

router.put("/:id", reportControllers.updateReport);

// router.put("/:id", authentication, reportControllers.deleteReport);

router.delete("/:id", reportControllers.deleteReport);

// router.delete("/:id", authentication, reportControllers.deleteReport);

router.get("/:id", reportControllers.getReport);

//getimage

// router.get("/imageupload/:key", reportControllers.getImage);

//post image
// router.post(
//   "/imageupload",
//   upload.single("image"),
//   reportControllers.imageUploadController
// );





module.exports = router;
