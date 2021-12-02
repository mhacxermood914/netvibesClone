const express = require("express");
const { GoogleAuth, handleGoogleAuthCallback, AuthenticateGoogleUser}=require('./../Controllers/users')
const router = express.Router();

//register using third-party providers

router.get('/signup/google', GoogleAuth)
router.get('/signin/google', GoogleAuth)
router.get('/google/callback', handleGoogleAuthCallback)



module.exports = router;
