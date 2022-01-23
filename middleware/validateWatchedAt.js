const moment = require('moment');

module.exports = (req, _res, next) => {
  const { talk } = req.body;
  const { watchedAt } = talk;

  const dataNascimento = moment(watchedAt, 'DD/MM/YYYY', true);
  const dataValida = dataNascimento.isValid();

  if (!watchedAt) {
    next({ 
      status: 400,
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }
  if (!dataValida) {
    next({ status: 400, message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  next();
};