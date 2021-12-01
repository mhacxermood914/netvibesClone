const express = require("express");
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const passport = require('passport')
const router = express.Router();


router.get('/google', passport.authenticate("google", {
    scope: ["profile", "email"],
}))
router.get('/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/',
        session:true
    }),
    function (req, res) {
        res.redirect('/dashboard')
    }
);

router.get('/login', ensureGuest, (req, res) => {
    res.render('login')
})


module.exports = router;
