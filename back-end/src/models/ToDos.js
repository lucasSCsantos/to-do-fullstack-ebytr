const connection = require('./connection');

const create = async (todoObj) => {
  const todo = await connection()
    .then((db) => db.collection('todos').insertOne(todoObj));
  return { _id: todo.insertedId, ...todoObj };
};

module.exports = {
  create,
};
