const fs = require('fs/promises');

module.exports = async (req, res, next) => {
  const { q } = req.query;

  const data = await fs.readFile('./talker.json', 'utf-8');
  const arrayTalkers = await JSON.parse(data);

  if (!q) return res.status(200).json(arrayTalkers);

  const response = arrayTalkers.filter((item) => item.name.includes(q));

  res.status(200).json(response);
  next();
};
