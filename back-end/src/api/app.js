const express = require('express');
const bodyParser = require('body-parser');
const ToDos = require('../controllers/ToDos');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/todos', ToDos.create);

app.listen(PORT, () => console.log('Example app listening on port port!'));