const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// const { YOURrouterHERE } = require('./routes/api');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/api/YOURrouterHERE ', YOURrouterHERE);

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

module.exports = app;