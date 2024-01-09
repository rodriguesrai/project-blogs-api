const { categoriesService } = require('../services');

const addCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const { status, data } = await categoriesService.addCategory(name);
  return res.status(status).json(data);
};

module.exports = {
  addCategory,
};