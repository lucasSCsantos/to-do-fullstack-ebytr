const ToDos = require('../models/ToDos');

const create = async (title, description, author, status) => {
  const todo = await ToDos.create({
    title,
    description,
    author,
    status,
  });
  return todo;
};

module.exports = {
  create,
};