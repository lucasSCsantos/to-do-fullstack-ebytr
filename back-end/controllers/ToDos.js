const ToDos = require('../services/ToDos');

const create = async (req, res) => {
  const {
    title,
    description,
    author,
    status,
  } = req.body;

  const todo = await ToDos.create(title, description, author, status);

  res.status(200).json(todo);
};

module.exports = {
  create,
};