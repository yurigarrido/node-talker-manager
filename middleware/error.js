module.exports = (err, _req, res, _next) => {
  console.log(err.message);

  if (err.status) {
    return res.status(err.status).json({ mensage: `${err.mensage}` });
  }

  return res.status(500).json({ mensage: 'internal server error' });
};