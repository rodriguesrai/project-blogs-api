// controllers/login.controller.js

const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const { loginService } = require('../services');

const validateLogin = async (req, res) => {
  const { status, data } = await loginService.validateLoginService(req.body);
  if (status === 400) return res.status(status).json({ message: data });

  const payload = {
    id: data.id,
    email: data.email,
  };
  
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
  return res.status(200).json({ token });
};

module.exports = {
  validateLogin,
};