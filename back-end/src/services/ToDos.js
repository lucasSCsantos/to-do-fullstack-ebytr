const ToDos = require('../models/ToDos');
const validateEntries = require('../helpers/validateEntries');

const currentDate = () => {
  const now = new Date();
  const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  const date = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDay()}`;
  return `${date} ${time}`;
};

const getAll = async () => {
  const todos = await ToDos.getAll();
  return todos;
};

const create = async (title, description, author, status) => {
  const method = 'post';
  const isValid = validateEntries(title, description, author, status, method);

  if (isValid.message) return isValid;

  const todo = await ToDos.create({
    title,
    description,
    author,
    status,
    date: currentDate(),
  });

  return { code: 201, todo };
};

const update = async (id, title, description, status) => {
  const method = 'put';
  const isValid = validateEntries(title, description, null, status, method);
  const updateObject = {};

  if (isValid.message) return isValid;

  if (title) updateObject.title = title;
  if (status) updateObject.status = status;
  if (description) updateObject.description = description;

  const todo = await ToDos.update(id, updateObject);

  return { code: 200, todo };
};

const deleteById = async (id) => {
  await ToDos.deleteById(id);
};

module.exports = {
  getAll,
  create,
  update,
  deleteById,
};