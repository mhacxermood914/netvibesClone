const express = require("express");
const router = express.Router();
const { Register,Login } = require("../Controllers/users");

/* Register user */
router.post("/register", Register);

/**
 * Authenticate User
 */
router.post("/login", Login);

module.exports = router;
