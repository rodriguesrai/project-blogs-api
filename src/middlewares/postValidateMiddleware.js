const { Category } = require('../models');

const validateBodyPost = (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

const validateCategoryIds = async (req, res, next) => {
  const { categoryIds } = req.body;
  const categoriesExists = await Category.findAll({ where: { id: categoryIds } });

  if (categoriesExists.length !== categoryIds.length) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
  next();
}; 

module.exports = {
  validateCategoryIds,
  validateBodyPost,
};