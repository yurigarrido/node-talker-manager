 module.exports = (req, _res, next) => {
  const { talk } = req.body;
  const { rate } = talk;
  if (!rate) {
    next({ 
      status: 400,
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }
  if (+rate < 1 || +rate > 5) {
    next({ status: 400, message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  next();
};
