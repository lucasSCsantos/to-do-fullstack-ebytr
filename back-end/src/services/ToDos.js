const ToDos = require('../models/ToDos');
const validateEntries = require('../helpers/validateEntries');

const currentDate = () => {
  const now = new Date();
  const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  const date = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDay()}`;
  return `${date} ${time}`;
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

  if (isValid.message) return isValid;

  const todo = await ToDos.update(id, {
    title,
    description,
    status,
  });

  return { code: 200, todo };
};

module.exports = {
  create,
  update,
};