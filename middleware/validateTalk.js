module.exports = (req, res, next) => {
  const { talk } = req.body;

  if (!talk) {
    next({ 
      status: 400,
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }
  next();
};
