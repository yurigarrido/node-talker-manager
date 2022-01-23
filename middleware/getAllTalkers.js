const fs = require('fs');

module.exports = async (_req, res, _next) => {
  const response = await fs.readFileSync('./talker.json', 'utf8');
  const data = await JSON.parse(response);
  return res.status(200).json(data);
};