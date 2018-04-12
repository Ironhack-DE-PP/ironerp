const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const index = require('./routes/index');

const app = express();

if(process.env.NODE_ENV === 'development') {
    require('dotenv').config();
}

require('./config/db');

const whiteList = ['http://localhost:/4200'];

const corsOptions = {
  origin: (origin, callback) => {
      const originIsWhitelisted = whiteList.indexOf(origin) !== -1;
      callback(null, originIsWhitelisted);
  },
  credentials: true
};

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

require('./config/errors');

module.exports = app;
