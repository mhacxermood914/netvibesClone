const express = require("express");
const router = express.Router();
const { getAllUsers,
    DeleteUser,
    GetUserId,
    ModifyEmail,
    ModifyPassword
} = require("../../Controllers/users");

/* The API won't work if there's no jwt token available in the request */

// Get list of user

router.get("/users", getAllUsers);

// Get user id

router.post('/user', GetUserId)

// Get specific user by id

// Delete specific user 

router.post("/delete/user", DeleteUser);

// Modify a specific user (can either modify his mail or his password)

router.post("/modify/email", ModifyEmail); /* {
"email": "rrr@gmail.com",
    "new_email": "test@gmail.com"
}*/
router.post("/modify/password", ModifyPassword);/* {
"email": "rrr@gmail.com",//existing mail
    "password": "test@gmail.com" // newest password
}*/

module.exports = router;
