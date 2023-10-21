const express = require("express");
const router = express.Router();
const usersControllers = require("../Controllers/userControllers");

router.get("/", usersControllers.fetchAllUsers);

router.delete("/:id", usersControllers.deleteUser);

router.get("/:id", usersControllers.getSingleUser);

module.exports = router;
