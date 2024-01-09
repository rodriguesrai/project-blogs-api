// userController.js
const { userService } = require('../services');

const createUser = async (req, res) => {
  const { status, data } = await userService.createUser(req.body);

  const response = {
    409: { message: data.message },
  };

  return res.status(status).json(response[status] || { token: data.token });
};
const getAllUsers = async (req, res) => {
  const { status, data } = await userService.getAllUsers();

  return res.status(status).json(data);
};

module.exports = {
  createUser,
  getAllUsers,
};