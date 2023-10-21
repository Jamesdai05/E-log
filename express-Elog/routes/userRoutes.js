const express = require("express");
const router = express.Router();
const usersControllers = require("../Controllers/userControllers");
const user = require("../Models/User");
const authentication = require("../Middleware/authentication");

router.get("/", authentication, usersControllers.fetchAllUsers);

router.delete("/:id", usersControllers.deleteUser);

router.get("/:id", usersControllers.getSingleUser);

router.get("/profile/:id", usersControllers.showUser);

module.exports = router;
