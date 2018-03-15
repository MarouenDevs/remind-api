import express from 'express';

import config from './config';

import router from './routes';

var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const app = express();
/** Body parser */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/** prevent CORS failures for this test */
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

router(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


app.listen(config.port);
module.exports = app;
