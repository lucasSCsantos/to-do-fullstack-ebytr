const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getAll = async () => {
  const todos = await connection()
    .then((db) => db.collection('todos').find().toArray());
  return { todos };
};

const create = async (todoObj) => {
  const todo = await connection()
    .then((db) => db.collection('todos').insertOne(todoObj));
  return { _id: todo.insertedId, ...todoObj };
};

const update = async (id, todoObj) => {
  if (!ObjectId.isValid(id)) {
    return false;
  }

  await connection()
    .then((db) => db.collection('todos').updateOne({
      _id: new ObjectId(id), 
    }, {
      $set: todoObj,
    }));
    return { _id: id, ...todoObj };
};

module.exports = {
  getAll,
  create,
  update,
};
