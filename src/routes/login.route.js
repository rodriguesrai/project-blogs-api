const express = require('express');

const router = express.Router();
const { loginMiddleware } = require('../middlewares');

router.post('/', loginMiddleware);

module.exports = router;