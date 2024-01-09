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

module.exports = {
  createUser,
};