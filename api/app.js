var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require("./routes/testAPI");
var app = express();

const allowLocalhostOnly = (req, res, next) => {
  // Use req.connection.remoteAddress for IPv4, req.socket.remoteAddress for IPv6
  const ipAddress = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.headers['x-forwarded-for'];

  // Check if the request is from localhost or a trusted IP
  if (ipAddress === '::ffff:127.0.0.1' || ipAddress === '::1' || ipAddress === '::ffff:192.168.1.5') {
    // Request is from localhost or the trusted IP, allow it
    next();
  } else {
    // Log the denied access for further analysis
  
    console.error(`Access denied for IP address: ${ipAddress}`);

    // Respond with a more accurate and informative message
    res.status(403).send({
      error: {
        code: 403,
        message: 'Access denied',
        reason: 'Requests must originate from localhost or a trusted IP address.',
      },
    });
  }
};


app.use(allowLocalhostOnly);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/blog', usersRouter);
app.use('/blogfocus', usersRouter);
app.use("/testAPI", testAPIRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
