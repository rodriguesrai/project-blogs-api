// authMiddleware.js
const jwt = require('jsonwebtoken');

const extractToken = (token) => token.slice(7);

const authorizationLogin = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const token = extractToken(authorizationHeader);

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  authorizationLogin,
};
