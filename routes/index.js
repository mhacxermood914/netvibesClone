var express = require("express");
const { ensureAuth, ensureGuest } = require('../middleware/auth')
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", userInfo: "" });
});

router.get('/dashboard', ensureAuth, (req, res,next) => {
  //console.log(req.cookies)

  res.end('cool')
  // console.log(req.logout())
  // res.render('dashboard')

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
