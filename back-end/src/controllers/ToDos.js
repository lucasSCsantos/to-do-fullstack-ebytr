const ToDos = require('../services/ToDos');

const create = async (req, res) => {
  const {
    title,
    description,
    author,
    status,
  } = req.body;

  const { code, message, todo } = await ToDos.create(title, description, author, status);

  if (!todo) return res.status(code).json({ message });

  res.status(code).json(todo);
};

module.exports = {
  create,
};