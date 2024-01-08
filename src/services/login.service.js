// services/login.service.js

const { User } = require('../models');

const validateLoginService = async ({ email, password }) => {
  const user = await User.findOne({ where: { email, password } });

  if (!user || password !== user.password) {
    return { status: 400, data: 'Invalid fields' };
  }

  return { status: 200, data: user };
};

module.exports = {
  validateLoginService,
};