var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("<h2>This is a testing route.respond with a resource</h2>");
});

module.exports = router;
