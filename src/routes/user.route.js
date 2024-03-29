const express = require('express');

const router = express.Router();
const { userController } = require('../controllers');
const { userMiddleware, authMiddleware } = require('../middlewares');

router.post('/', userMiddleware.validateUser, userController.createUser);
router.get('/', authMiddleware.authorizationLogin, userController.getAllUsers);
router.get('/:id', authMiddleware.authorizationLogin, userController.getUserById);

module.exports = router;