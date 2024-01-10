// post.service.js
const { BlogPost } = require('../models');

const createPost = async (title, content, userId, categoryIds) => {
  const post = await BlogPost.create({
    title,
    content,
    userId,
    published: new Date(),
    updated: new Date(),
  });

  if (categoryIds && categoryIds.length > 0) {
    await post.addCategories(categoryIds);
  }

  return { status: 201, data: post };
};

module.exports = {
  createPost,
};
