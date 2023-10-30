var express = require("express");
var router = express.Router();
const reportControllers = require("../Controllers/postControllers");
const authentication = require("../Middleware/authentication");

/* GET home page. */
router.get("/", reportControllers.fetchAllReports);

// router.post("/", authentication, reportControllers.createReport);

router.post("/", reportControllers.createReport);

// router.post("/", authentication, reportControllers.createReport);

// router.put("/:id", reportControllers.updateReport);

// router.put("/:id", authentication, reportControllers.deleteReport);

router.delete("/:id", reportControllers.deleteReport);

// router.delete("/:id", authentication, reportControllers.deleteReport);

router.get("/:id", reportControllers.getReport);

module.exports = router;
