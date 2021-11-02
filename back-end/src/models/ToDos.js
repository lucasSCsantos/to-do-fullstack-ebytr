const { ObjectId } = require('mongodb');
const connection = require('./connection');

const create = async (todoObj) => {
  const todo = await connection()
    .then((db) => db.collection('todos').insertOne(todoObj));
  return { _id: todo.insertedId, ...todoObj };
};

const update = async (id, todoObj) => {
  if (!ObjectId.isValid(id)) {
    return false;
  }

  const todo = await connection()
    .then((db) => db.collection('todos').updateOne({
      _id: new ObjectId(id),
    }, {
      $set: todoObj,
    }))
}

module.exports = {
  create,
};
