const express = require('express');
const morgan = require('morgan');

const tourRoutes = require('./routes/tourRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// MIDDLEWARES

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// MOUNTED ROUTES

app.use('/api/v1/tours', tourRoutes);
app.use('/api/v1/users', userRoutes);

module.exports = app;
