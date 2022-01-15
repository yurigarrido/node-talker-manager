const express = require('express');
const bodyParser = require('body-parser');
// const { getTalk } = require('./getTalkerManager')

const getAllTalkers = require('./middleware/getAllTalkers');
const error = require('./middleware/error');
const getTalkerById = require('./middleware/getTalkerById');

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

//----------------

// requisito 02
app.get('/talker/:id', getTalkerById);

//----------------
// requisito 03
app.get('/talker/login', async (req, res, _next) => {
  const token = await getTalk();

  const { id } = req.params;
  const { email, password } = req.body;
  const peopleInfo = response.find((people) => people.id === +id);
  if (!peopleInfo) {
    return res.status(404).json({
    message: 'Pessoa palestrante não encontrada',
    });
  }
  return res.status(200).json(peopleInfo);
});

//----------------
// captura os error
app.use(error)

app.listen(PORT, () => {
  console.log('Online');
});