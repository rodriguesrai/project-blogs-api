// post.controller.js
const { postService } = require('../services');

const createPost = async (req, res) => {
  const { id } = req.user;
  const { title, content, categoryIds } = req.body;
  const { status, data } = await postService.createPost(title, content, id, categoryIds);
  res.status(status).json(data);
};

module.exports = {
  createPost,
};