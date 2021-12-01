require("dotenv").config();
const createError = require("http-errors");
const expressLayouts = require("express-ejs-layouts");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const db = require("./config/db");
const app = express();
const indexRoutes = require('./routes')
const authRoutes = require('./routes/auth')

//setup port number
const PORT = process.env.PORT || process.env.HTTP_PORT || 3000;

//check connectivity to database
try {
  db.authenticate().then((res) => {
    console.log('Connection has been established successfully.');
  })
} catch (error) {
  console.error('Unable to connect to the database:', error);
}



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

app.use('/', indexRoutes);
app.use('/api/auth', authRoutes);

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

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT} ...`);
});
