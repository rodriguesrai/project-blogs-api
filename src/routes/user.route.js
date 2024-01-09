const express = require('express');

const router = express.Router();
const { userController } = require('../controllers');
const { userMiddleware } = require('../middlewares');

router.post('/', userMiddleware.validateUser, userController.userController);

module.exports = router;