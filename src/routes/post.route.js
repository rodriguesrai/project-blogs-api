const express = require('express');

const router = express.Router();
const { postController } = require('../controllers');
const { postValidateMiddleware, authMiddleware } = require('../middlewares');

router.post(
  '/',
  authMiddleware.authorizationLogin,
  postValidateMiddleware.validateBodyPost,
  postValidateMiddleware.validateCategoryIds,
  postController.createPost,
);

module.exports = router;