var express = require("express");
const { ensureAuth, ensureGuest } = require('../middleware/auth')
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", user: null });
});

router.get('/dashboard', ensureAuth, (req, res,next) => {
  //console.log(req.cookies)
  res.render('dashboard', { title: "Express",user: req.cookies.user?true:false})
  
})

router.get('/services',  (req, res,next) => {
  res.render('dashboard/services', { user: req.user });
})

router.get('/interest',  (req, res,next) => {
  res.render('dashboard/interest', { user: req.user });
})

// router.get("/logout", (req, res) => {
//   req.session = null;
//   req.logout();
//   res.redirect("/");
// })

// router.get("/dashboard", function (req, res, next) {
//   console.log(req.user)
//   //res.render("index", { title: "Express" });
// });

router.use("/users", require("./users"));

module.exports = router;
