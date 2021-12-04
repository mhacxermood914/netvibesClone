const express = require("express");
const ip = require('ip')
const { ensureAuth, ensureAdminAuth } = require('../middleware/auth')
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", user: null });
});

router.get('/dashboard', ensureAuth, (req, res,next) => {
  //console.log(req.cookies)
  res.render('dashboard', { title: "Express",user: req.cookies.user?true:false})
  
})

router.get('/services', ensureAuth, (req, res,next) => {
  res.render('dashboard/services', { user: req.cookies.user ? true : false });
})

router.get('/admin', ensureAdminAuth, (req, res, next) => {
  res.render('dashboard/admin', { user:true });
})

router.get('/admin/login', (req, res, next) => {
  res.render('dashboard/login',{user:true});
})

router.get('/interest', ensureAuth,  (req, res,next) => {
  res.render('dashboard/interest', { user: req.cookies.user ? true : false });
})

router.get('/admin', ensureAuth,  (req, res,next) => {
  res.render('dashboard/admin', { user: req.cookies.user ? true : false });
})

router.get('/admin/login', ensureAuth,  (req, res,next) => {
  res.render('dashboard/login', { user: req.cookies.user ? true : false });
})

router.get('/about.json', function (req, res) {
  var time = (new Date).getTime()
  res.json({
    "client": {
      "host": ip.address()
    },
    " server ": {
      " current_time ": time,
      " services ": [{
        " name ": " weather ",
        " widgets ": [{
          " name ": " city_temperature ",
          " description ": " Display temperature for a city ",
          " params ": [{
            " name ": " city ",
            " type ": " string "
          }]
        }]
      }, {
        " name ": " rss ",
        " widgets ": [{
          " name ": " article_list ",
          " description ": " Displaying the list of the last articles ",
          " params ": [{
            " name ": " link ",
            " type ": " string "
          },{
            " name ": " number ",
            " type ": " integer "
          }]
        }]
      }]
    }
  })
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
