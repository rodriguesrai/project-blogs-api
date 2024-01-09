const JWT = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const generateToken = (payload) => {
  const token = JWT.sign(payload, JWT_SECRET, { expiresIn: '7d' });
  return token;
};

module.exports = {
  generateToken,
};