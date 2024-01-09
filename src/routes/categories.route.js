const express = require('express');

const router = express.Router();

const { categoriesController } = require('../controllers');
const { authMiddleware } = require('../middlewares');

router.post('/', authMiddleware.authorizationLogin, categoriesController.addCategory);

module.exports = router;