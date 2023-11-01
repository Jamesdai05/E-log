const express = require("express");
const router = express.Router();
const categoryControllers = require("../Controllers/categoryController");

router.get("/", categoryControllers.fetchAllCategory);

router.post("/", categoryControllers.createCategory);

module.exports = router;
