const express = require('express');
const bodyParser = require('body-parser');

const getAllTalkers = require('./middleware/getAllTalkers');
const error = require('./middleware/error');
const getTalkerById = require('./middleware/getTalkerById');
const validatePassword = require('./middleware/validatePassword');
const validateLogin = require('./middleware/validateLogin');
const validateEmail = require('./middleware/validateEmail');
const validateToken = require('./middleware/validateToken');
const validateName = require('./middleware/validateName');
const validateAge = require('./middleware/validateAge');
const validateTalk = require('./middleware/validateTalk');
const validateRate = require('./middleware/validateRate');
const validateWatchedAt = require('./middleware/validateWatchedAt');
const registerTalker = require('./middleware/registerTalker');
const editTalker = require('./middleware/editTalker');
const deleteTalker = require('./middleware/deleteTalker');

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

// requisito 04
app.post('/talker',
validateToken,
validateName,
validateAge,
validateTalk,
validateRate,
validateWatchedAt,
registerTalker);

// requisito 05
app.put('/talker/:id',
validateToken,
validateName,
validateAge,
validateTalk,

validateRate,
validateWatchedAt,

editTalker);

// requisito 06
app.delete('/talker/:id',
validateToken,
deleteTalker);

// captura os erros
app.use(error);

app.listen(PORT, () => {
  console.log('Online');
});