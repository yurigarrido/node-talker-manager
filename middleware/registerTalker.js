const fs = require('fs/promises');

module.exports = async (req, res, _next) => {
  const { name, age, talk } = req.body;

  const listTalkers = await fs.readFile('./talker.json', 'utf-8');
  const listTalkersJSON = JSON.parse(listTalkers);

  const newTalker = { id: listTalkersJSON.length + 1, name, age, talk };
  
  const updatedListTalkers = [...listTalkersJSON, newTalker];
  fs.writeFile('./talker.json', JSON.stringify(updatedListTalkers));

  res.status(201).json(newTalker);
};
