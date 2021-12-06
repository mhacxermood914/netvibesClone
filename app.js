require("dotenv").config();
const createError = require("http-errors");
const expressLayouts = require("express-ejs-layouts");
const express = require("express");
const path = require("path");
const useragent = require('express-useragent');
const cookieParser = require("cookie-parser");

const logger = require("morgan");
const db = require("./config/db");
const session = require('express-session')
const passport = require('passport');
const app = express();

//setup port number
const PORT = process.env.PORT || process.env.HTTP_PORT;

//check connectivity to database
try {
  db.authenticate().then((res) => {
    console.log('Connection has been established successfully.');
  })
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.use(useragent.express());

//
app.use(cookieParser())

// //setup session

// app.use(session({
//   name:"user",
//   resave: false,
//   saveUninitialized: true,
//   secret: 'SECRET'
// }));

const data = ["a", "rz"]
// view engine setup
app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
//setup passport
// app.use(passport.initialize());
// app.use(passport.session());

app.use('/', require('./routes'));
app.use('/auth', require('./routes/auth'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api', require('./routes/api/users'));
app.use('/api/widgets', require('./routes/api/widgets'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(8080, () => {
  console.log(`Listening on port: ${8080} ...`);
});
