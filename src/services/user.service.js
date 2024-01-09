// user.service.js
const { User } = require('../models');
const { generateToken } = require('../utils/generateToken');

const createUser = async ({ displayName, email, password, image }) => {
  const searchUser = await User.findOne({ where: { email } });
  if (searchUser) return { status: 409, data: { message: 'User already registered' } };
  
  const user = await User.create({ displayName, email, password, image });
  const token = generateToken({ id: user.id, email: user.email });
  return { status: 201, data: { token } };
};

const getAllUsers = async () => {
  const userList = await User.findAll({
    attributes: ['id', 'displayName', 'email', 'image'],
  });
  return { status: 200, data: userList };
};

const getUserById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });

  if (!user) return { status: 404, data: { message: 'User does not exist' } };
  return { status: 200, data: user };
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};