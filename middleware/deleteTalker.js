const fs = require('fs/promises');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const data = await fs.readFile('./talker.json', 'utf-8');
  const arrayTalkers = JSON.parse(data);

  const arrayUpdated = arrayTalkers.filter((item) => item.id !== +id);
  console.log(arrayUpdated);

  fs.writeFile('./talker.json', JSON.stringify(arrayUpdated));
  res.status(204).json();
  next();
};
