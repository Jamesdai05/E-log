var express = require("express");
var router = express.Router();
const reportControllers = require("../Controllers/postControllers");
const authentication = require("../Middleware/authentication");

/* GET home page. */
router.get("/", reportControllers.fetchAllReports);

// router.post("/", authentication, reportControllers.createReport);

router.post("/", reportControllers.createReport);

router.post("/", reportControllers.createReport);

router.put("/:id", reportControllers.updateReport);

router.delete("/:id",reportControllers.deleteReport)

module.exports = router;
