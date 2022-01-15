module.exports = (req, _res, next) => {
  const { email } = req.body;
  const re = /\S+@\S+\.\S+/;
  // const isEmail = emailRegex.teste(email);

  if (!email) {
    next({ status: 400, message: 'O campo "email" é obrigatório' });
  }

  if (re.test(email) === false) {
    next({ status: 400, message: 'O "email" deve ter o formato "email@email.com"' });
  }
  next();
};
