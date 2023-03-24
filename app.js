const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
const fs = require('fs/promises');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
require('dotenv').config();

const authRouter = require('./routes/api/auth');
const newsRouter = require('./routes/api/news');
const noticeRouter = require('./routes/api/notices');
const { usersRouter } = require('./routes/api/users');
const servicesRouter = require('./routes/api/services');
require('./services/cloudinary/setCloudinaryConfig');

const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/news', newsRouter);
app.use('/api/auth', authRouter);
app.use('/api/notices', noticeRouter);
app.use('/api/users', usersRouter);
app.use('/api/services', servicesRouter);
app.use('/api-swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((err, req, res, next) => {
  if (req.file) fs.unlink(req.file.path);
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

module.exports = app;
