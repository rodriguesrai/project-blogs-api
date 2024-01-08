// routes/login.route.js
const express = require('express');

const router = express.Router();
const { loginMiddleware } = require('../middlewares');
const { loginController } = require('../controllers');

router.post('/', loginMiddleware.validateLogin, loginController.validateLogin);

module.exports = router;