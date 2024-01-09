const loginMiddleware = require('./loginMiddleware');
const userMiddleware = require('./userValidationMiddleware');
const authMiddleware = require('./authMiddleware');

module.exports = {
  loginMiddleware,
  userMiddleware,
  authMiddleware,
};