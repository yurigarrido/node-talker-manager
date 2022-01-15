const fs = require('fs/promises');

module.exports = async (req, res, next) => {
  const response = await fs.readFile('./talker.json', 'utf8');
  const data = await JSON.parse(response);

  const { id } = req.params;
  const peopleInfo = data.filter((people) => people.id === +id);
  if (peopleInfo.length === 0) {
    next({ status: 404, message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(200).json(peopleInfo[0]);
};