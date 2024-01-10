const loginMiddleware = require('./loginMiddleware');
const userMiddleware = require('./userValidationMiddleware');
const authMiddleware = require('./authMiddleware');
const postValidateMiddleware = require('./postValidateMiddleware');

module.exports = {
  loginMiddleware,
  userMiddleware,
  authMiddleware,
  postValidateMiddleware,
};