const { Category } = require('../models');

const addCategory = async (name) => {
  const category = await Category.create({ name });
  return { status: 201, data: category };
};

module.exports = {
  addCategory,
};