const { Unauthorized, BadRequest } = require('http-errors');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

module.exports = async (req, res, next) => {
  if (req.method === 'options') {
    next();
  }
  try {
    const authHeader = req.headers.authorization;
    // is header persist
    if (!authHeader) {
      throw new BadRequest("Authorization header doesn't provided");
    }

    const secretKey = process.env.SECRET_KEY;
    const [type, token] = authHeader.split(' ');
    if (!token || type !== 'Bearer') {
      throw new Unauthorized('Not authorized');
    }

    const { id } = jwt.verify(token, secretKey);

    const user = await User.findById(id);
    if (!user || !user.token) {
      throw new Unauthorized('Not authorized');
    }
    req.user = id;
    next();
  } catch (error) {
    return next(error);
  }
};
