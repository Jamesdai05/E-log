var express = require("express");
var router = express.Router();
const reportControllers = require("../Controllers/postControllers");
const authentication = require("../Middleware/authentication");

/* GET home page. */
router.get("/", reportControllers.fetchAllReports);

router.post("/", authentication, reportControllers.createReport);

module.exports = router;
