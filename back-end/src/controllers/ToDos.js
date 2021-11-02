const ToDos = require('../services/ToDos');

const getAll = async (req, res) => {
  const todos = await ToDos.getAll();
  return res.status(200).json(todos);
};

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

const update = async (req, res) => {
  const {
    title,
    description,
    status,
  } = req.body;
  const { id } = req.params;

  const { code, message, todo } = await ToDos.update(id, title, description, status);

  if (!todo) return res.status(code).json({ message });

  res.status(code).json(todo);
};

const deleteById = async (req, res) => {
  const { id } = req.params;

  await ToDos.deleteById(id);

  res.status(204).end();
};

module.exports = {
  getAll,
  create,
  update,
};