const jwt = require('jsonwebtoken');

const { SECRET_KEY } = process.env;

const createRefreshToken = payload => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1w' });
};

module.exports = { createRefreshToken };
