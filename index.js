const express = require('express');
const bodyParser = require('body-parser');

const getAllTalkers = require('./middleware/getAllTalkers');
const error = require('./middleware/error');
const getTalkerById = require('./middleware/getTalkerById');
const validatePassword = require('./middleware/validatePassword');
const validateLogin = require('./middleware/validateLogin');
const validateEmail = require('./middleware/validateEmail');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// requisito 01
app.get('/talker', getAllTalkers);

// requisito 02
app.get('/talker/:id', getTalkerById);

// requisito 03
app.post('/login', validateEmail, validatePassword, validateLogin);

// captura os erros
app.use(error);

app.listen(PORT, () => {
  console.log('Online');
});