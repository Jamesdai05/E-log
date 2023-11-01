const express = require("express");
const router = express.Router();
const categoryControllers = require("../Controllers/categoryCtrls");

router.get("/",categoryControllers.fetchAllCategories);

router.post("/", categoryControllers.createCategory);

module.exports = router;
