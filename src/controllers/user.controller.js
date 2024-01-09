// userController.js
const { userService } = require('../services');

const userController = async (req, res) => {
  const { status, data } = await userService.createUser(req.body);

  const response = {
    409: { message: data.message },
  };

  return res.status(status).json(response[status] || { token: data.token });
};

module.exports = {
  userController,
};