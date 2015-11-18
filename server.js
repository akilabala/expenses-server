/* eslint-disable */

// BASE SETUP
// ========================

// Call the packages we need
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var apiRoutes = require('./api')(app, express);

// Configure app to use bodyParser()
// this lets us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set our port
var port = process.env.PORT || 8080;

// REGISTER OUR ROUTES
// ==========================
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'X-Access-Token,Content-Type, Authorization, Content-Length, X-Requested-With,' +
    'X-Spa-Name, Cache-Control, X-Spa-State');

// intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  }
  else {
    next();
  }
});
app.use('/api/v1', apiRoutes);

// START THE SERVER
// ==========================
app.listen(port);
console.log('Magic happens on port ' + port);

/* eslint-enable */
