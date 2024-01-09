const { Category } = require('../models');

const addCategory = async (name) => {
  const category = await Category.create({ name });
  return { status: 201, data: category };
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return { status: 200, data: categories };
}; 

module.exports = {
  addCategory,
  getAllCategories,
};