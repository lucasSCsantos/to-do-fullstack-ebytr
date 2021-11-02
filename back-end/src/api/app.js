const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ToDos = require('../controllers/ToDos');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/todos', ToDos.getAll);
app.post('/todos', ToDos.create);
app.put('/todos/:id', ToDos.update);
app.delete('/todos/:id', ToDos.deleteById);

app.listen(PORT, () => console.log('Example app listening on port port!'));