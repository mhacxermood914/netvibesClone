const express = require("express");
const router = express.Router();
const { getAllUsers, getOneUser } = require("../Controllers/users");

/* GET users listing. */
router.get("/", getAllUsers);

/**
 * GET user by ID
 */
router.get("/:id", getOneUser);

module.exports = router;
