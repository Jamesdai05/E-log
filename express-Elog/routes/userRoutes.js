const express = require("express");
const router = express.Router();
const authControllers = require("../Controllers/authControllers");

router.post("/login", authControllers.login);

module.exports = router;
