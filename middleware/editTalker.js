const fs = require('fs/promises');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;
  const listTalkers = await fs.readFile('./talker.json', 'utf-8');
  const data = JSON.parse(listTalkers);
  const dataUpdate = { id: +id, name, age: +age, talk };
  const arrayAtt = data.map((item) => {
    if (item.id === +id) {
      return dataUpdate;
    }
    return item;
  });
  fs.writeFile('./talker.json', JSON.stringify(arrayAtt));
  res.status(200).json(dataUpdate);
  next();
};
