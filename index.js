const express = require('express');
const bodyParser = require('body-parser');
const { getTalk } = require('./getTalkerManager');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// requisito 01
app.get('/talker', async (_req, res, _next) => {
  const response = await getTalk();

  if (!response) return res.status(200).json([]);
  return res.status(200).json(response);
});

//----------------

// requisito 02
app.get('/talker/:id', async (req, res, _next) => {
  const response = await getTalk();

  const { id } = req.params;
  const peopleInfo = response.find((people) => people.id === +id);
  if (!peopleInfo) {
    return res.status(404).json({
    message: 'Pessoa palestrante não encontrada',
    });
  }
  return res.status(200).json(peopleInfo);
});

//----------------

app.listen(PORT, () => {
  console.log('Online');
});