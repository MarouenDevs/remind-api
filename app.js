import express from 'express';

import config from './config';

import router from './routes';

var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

router(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


app.listen(config.port);
module.exports = app;
