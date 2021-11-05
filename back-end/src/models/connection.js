const { MongoClient } = require('mongodb');

require('dotenv').config();

const LOCAL = 'localhost';
const MONGO_DB_URL = `mongodb://${process.env.HOST || LOCAL}:27017/ToDoList`;
const DB_NAME = 'ToDoList';

const connection = () => 
  MongoClient
    .connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db(DB_NAME))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });

module.exports = connection;  