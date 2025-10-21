const express = require('express');
const app = express();
const morgan = require('morgan');
const {default:helmet} = require('helmet');
const compression = require('compression');
const {checkOverload} = require('./helpers/check.connect');
require('dotenv').config(); 

//init middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

//init database
require('./dbs/init.mongodb');
checkOverload();
//init routes
app.get('/', (req, res) => {
    const demoStr = "demo string for compression";
    res.status(200).json({
        message: 'Welcome to the E-commerce API',
        metaData : demoStr.repeat(1000)
    });
});
//handle errors

module.exports = app;